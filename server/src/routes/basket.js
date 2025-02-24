const express = require("express")
const { UserModel } = require("../models/user")
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware');
const { ItemsModel } = require("../models/ItemsModel");



router.post("/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ data: "User not found" });
        }

        const itemIndex = user.basket.indexOf(id);
        if (itemIndex === -1) {
            user.basket.push(id);
            await user.save();
            return res.status(200).json({ data: "Added to basket", status: "added" });
        } else {

            user.basket.splice(itemIndex, 1);
            await user.save();
            return res.status(200).json({ data: "Removed from basket", status: "removed" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: "Server error" });
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);

        const basketIds = user.basket;
        const products = await ItemsModel.find({ '_id': { $in: basketIds } });
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
    }
})


router.delete("/clear", authMiddleware, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.basket = []; 
        await user.save();

        res.status(200).json({ message: "Basket cleared successfully" });
    } catch (error) {
        console.error("Error clearing basket:", error);
        res.status(500).json({ message: "Server error" });
    }
});
module.exports = router