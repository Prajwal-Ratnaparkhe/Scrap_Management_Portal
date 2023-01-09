const { Router, response } = require("express");
const cloudinary = require("cloudinary").v2;
const router = require("express").Router();
const path = require("path");
var fs = require("fs");

//models
const { db } = require("../models/productModel");
const Product = require("../models/productModel");

//image upload
cloudinary.config({
  cloud_name: "dlvnjt9ql",
  api_key: "635416963145875",
  api_secret: "LxiSS5NGcn7V_1EwA1nP6n-drvA",
});

//increse id
const countermodel = require("../models/counterModel");

// add product
router.post("/product/add", (req, res, next) => {
  const file = req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    countermodel.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true },
      (err, cd) => {
        let seqId;
        if (cd == null) {
          const newval = new countermodel({ id: "autoval", seq: 1 });
          newval.save();
          seqId = 1;
        } else {
          seqId = cd.seq;
        }

        const item_name = req.body.item_name;
        const description = req.body.description;
        const category = req.body.category;
        const price = req.body.price;
        const img = result.url;

        const product = {
          id: seqId,
          item_name,
          img,
          description,
          category,
          price,
        };

        const newProduct = new Product(product);
        newProduct
          .save()
          .then(() => res.json("product added"))
          .catch((err) => res.status(400).json("Error: " + err));
      }
    );

    seqId = 0;
  });
});

// update perticular product
router.patch("/product/updateProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const upades = req.body;
    const options = { new: true };

    const result = await Product.findByIdAndUpdate(id, upades, options);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// delete product
router.delete("/product/deleteProduct/:id", async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    if (!product) return res.status(404).send({ message: "not found" });
    res.status(200).send({ message: "product deleted", product });
    console.log(product);
  } catch (e) {
    res.status(500).send({ message: "internal server error" });
  }
});

// get all product
router.get("/product/allproducts", async (req, res) => {
  try {
    const allData = await Product.find();
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).send({ message: "internal server error" });
  }
});

module.exports = router;