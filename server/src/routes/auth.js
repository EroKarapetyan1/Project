const express = require("express")
const { UserModel } = require("../models/user")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const authMiddleware = require('../middleware/authMiddleware');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS

  }
})

router.post('/register', async (req, res) => {

  const { email, password, anun, surName } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
  try {
    const user = new UserModel({ email, password: hashedPassword, verificationCode, anun, surName })
    await user.save()
    await transporter.sendMail({
      to: email,
      subject: `email verification`,
      html: `your verification code is: <b style='color:red'>${verificationCode}</b>`
    })
    res.status(201).json({ message: 'user registered check you email for verification' })

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})




router.post('/verify', async (req, res) => {
  const { email, code } = req.body
  const user = await UserModel.findOne({ email })
  if (user && user.verificationCode === code) {
    user.isVerified = true
    user.verificationCode = undefined
    await user.save()
    res.json({ message: 'email vervicated successfully' })
  } else {
    res.status(400).json({ error: 'invalid verification code' })
  }
})



router.post('/login', async (req, res) => {

  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    if (!user.isVerified) return res.status(403).json({ error: 'Email not verified.' });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.json({ token });
  } else {
    res.status(400).json({ error: 'Invalid credentials.' });
  }
});

router.put('/ChangePassword', async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found.' });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid old password.' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password changed successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
});
router.get('/profile', authMiddleware, async (req, res) => {

  const user = await UserModel.findById(req.user.userId);

  if (!user) {
    return res.status(404).json({ error: "user not found" })
  }
  res.json({ email: user.email, anun: user.anun, surName: user.surName, isVerified: user.isVerified , basket: user.basket});
});


router.post('/login/admin', async (req, res) => {


  const { login, password } = req.body;

  if (login === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASS) {
    const token = jwt.sign({ userId: login }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.json({ token })
  } else {
    res.status(400).json({ error: 'Invalid credentials.' });
  }
})

router.get("/profile/admin", authMiddleware, async (req, res) => {

  res.status(200).json({ login: req.user.userId })
})

router.get('/profile', authMiddleware, async (req, res) => {
  const user = await UserModel.findById(req.user.userId);
  res.json({ email: user.email, name: user.name, lastName: user.lastName, isVerified: user.isVerified });
});





router.put("/forgot-password", async (req, res) => {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({message : 'pls enter tour email'})
  }
  const user = await UserModel.findOne({ email })
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }
  const resetCode = Math.floor(100000 + Math.random() * 900000).toString()
  user.resetCode = resetCode
  await user.save()
  await transporter.sendMail({
    to: email,
    subject: "reset code",
    text: resetCode
  })
  res.status(200).json({ message: "SUCCESS" })
})



router.put("/forgot-password-check", async (req, res) => {



  const { email, resetCode, password } = req.body


  const user = await UserModel.findOne({ email })


  if (!user) {
    return res.status(404).json({ message: "user not found" })

  }

  if (user.resetCode !== resetCode) {
    return res.status(400).json({ message: "invalid resest code" })

  }


  const hashedPassword = await bcrypt.hash(password, 10)


  user.password = hashedPassword


  user.resetCode = null


  await user.save()


  res.status(200).json({ message: "success" })


})





module.exports = router