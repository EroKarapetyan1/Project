require('dotenv').config();
const express = require("express")
const app = express()
const PORT = 3001
const cors = require("cors")
const fileUpload = require("express-fileupload")
const fs = require("fs")
const path = require("path")
const uploadsPath = path.join(path.resolve(), "uploads")
const body = require("body-parser")
const mongoose = require('mongoose')
const authRouter = require("./routes/auth")
const AddItmesRoute = require('../src/routes/products')
const getLikes = require('../src/routes/basket')
const db = "mongodb://127.0.0.1:27017/project"
const filter = require("./routes/filter")
const addLikes = require("./routes/add-like")

if (!fs.existsSync(uploadsPath)) {
} fs.mkdirSync(uploadsPath, { recursive: true })

console.log(uploadsPath);

mongoose.connect(db)
    .then(() => console.log("connect db"))
    .catch(err => console.log(err))


app.use(cors())
app.use(body.json())
app.use(fileUpload())
app.use("/uploads", express.static(uploadsPath))
app.use("/api/auth", authRouter)
app.use("/api", AddItmesRoute)
app.use("/api/basket", getLikes)
app.use("/filter", filter)
// app.use("/add-like", addLikes)






app.listen(PORT, () => console.log(`server running on port ${PORT}`))