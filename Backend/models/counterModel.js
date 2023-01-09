const mongoose = require("mongoose");

const counterSchema = {
  id: {
    type: String,
  },
  seq: {
    type: Number,
  },
};

const countermodel = mongoose.model("counter", counterSchema);

module.exports = countermodel;