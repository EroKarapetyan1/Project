const express = require("express");
const router = express.Router();
const path = require("path")
const fs = require("fs")
const { ItemsModel } = require("../models/ItemsModel");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/AddProducts", async (req, res) => {
    try {
        if (!req.files || !req.files.image) {
            return res.status(400).json({ message: "Image file is required" });
        }

        const uploadDir = path.join(path.resolve(), "/uploads");

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const image = req.files.image;
        const timestamp = Date.now();
        const extension = path.extname(image.name);
        const sanitizedFilename = image.name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "");
        const imageName = `${timestamp}_${sanitizedFilename}`;

        const uploadPath = path.join(uploadDir, imageName);
        await image.mv(uploadPath);
        const newProduct = new ItemsModel({
            modelName: req.body.modelName || req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            image: imageName
        });
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in /AddProducts:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});


router.get("/GetProducts", async (_, res) => {
    try {
        const GetProducts = await ItemsModel.find()
        res.status(200).send({ data: GetProducts })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


router.delete("/DeleteProducts/:id", authMiddleware, async (req, res) => {


    if (req.user.userId !== "admin") {
        return res.status(403).json({ error: 'only admin can delete phones' })
    }
    try {
        const { id } = req.params
        const product = await ItemsModel.findById(id)
            const pathImage = path.join(path.resolve(), "/uploads/", product.image)
        if (fs.existsSync(pathImage)) {
            fs.unlinkSync(pathImage, () => { })
        }
        await ItemsModel.findByIdAndDelete(id)
        res.status(200).send({ data: product })

    } catch (error) {
        console.log(error);

    }

})


router.put("/PutProducts/:id", authMiddleware, async (req, res) => {
    if (req.user.userId !== 'admin') {
        return res.status(403).json({ error: 'only admin can edit phones' });
    }

    const { id } = req.params;
    const { modelName, price, category, brand } = req.body;
    let image = null; 

    try {
        const product = await ItemsModel.findById(id);
        if (!product) {
            return res.status(404).send({ data: "Product not found" });
        }


        if (req.files && req.files.image) {
            const oldImagePath = path.join(path.resolve(), "/uploads/", product.image);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }

            const imageFile = req.files.image;
            const timestamp = Date.now();
            const sanitizedFilename = imageFile.name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "");
            const imageName = `${timestamp}_${sanitizedFilename}`;
            const uploadPath = path.join(path.resolve(), "/uploads/", imageName);
            await imageFile.mv(uploadPath);
            image = imageName;
        } else {
            image = product.image; 
        }

        const updateObj = {
            modelName: modelName || product.modelName,
            price: price || product.price,
            category: category || product.category,
            brand: brand || product.brand,
            image: image, 
        };

        const updatedProduct = await ItemsModel.findByIdAndUpdate(id, updateObj, { new: true });
        if (!updatedProduct) {
            return res.status(400).send({ data: "Failed to update product" });
        }

        res.status(200).send({ data: "success", updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).send({ data: "Internal server error" });
    }
});

// router.put("/add-like/:id", async (req, res) => {
//     const { id } = req.params
//     const model = await ItemsModel.findById(id)
//     if (model.like) {
//         await ItemsModel.findByIdAndUpdate(id, { like: false })
//     } else {
//         await ItemsModel.findByIdAndUpdate(id, { like: true })
//     }
//     res.status(200).json({ data: "success" })
// })


module.exports = router;