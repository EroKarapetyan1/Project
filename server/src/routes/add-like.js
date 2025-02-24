// const express = require("express")
// const { ItemsModel } = require("../models/ItemsModel")
// const router = express.Router()

// router.put("/", async (req, res) => {
//     const { id } = req.body
//     const model = await ItemsModel.findById(id)
//     if (model.like) {
//         await ItemsModel.findByIdAndUpdate(id, { like: false })
//     } else {
//         await ItemsModel.findByIdAndUpdate(id, { like: true })
//     }
//     res.status(200).json({ data: "success" })
// })

// module.exports = router