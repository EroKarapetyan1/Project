const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  modelName: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  image: { type: String, required: true },
  images: { type: Array},
  like: {
    type: Boolean,
    default: false
  },
});

const ItemsModel = mongoose.model('item', ItemsSchema);
module.exports.ItemsModel = ItemsModel;