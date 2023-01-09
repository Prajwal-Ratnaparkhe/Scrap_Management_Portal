const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
  },
  item_name: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  img: {
    type: String,
  },
});

const resellProduct = mongoose.model("ReSellProductData", productSchema);
module.exports = resellProduct;