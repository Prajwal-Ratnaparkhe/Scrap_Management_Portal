const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
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

const User = mongoose.model("ReSellProductUserData", userSchema);
module.exports = User;