const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
  },
  item_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
  },
});

const Product = mongoose.model("AllProductData", productSchema);

module.exports = Product;