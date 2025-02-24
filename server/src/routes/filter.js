const express = require("express")
const router = express.Router()
const { ItemsModel } = require("../models/ItemsModel")

router.get("/", async (req,res) => {
    const {filter} = req.query
    const products = await ItemsModel.find({brand : filter})
    res.status(200).send({data : products})
})


module.exports = router