const router = require("express").Router();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const path = require("path");
var fs = require("fs");

//models
const { db } = require("../models/reSellProductModel");
let userProduct = require("../models/productModel");
let User = require("../models/newUserModel");
const { dbs } = require("../models/newUserModel");
const resellProduct = require("../models/reSellProductModel");
const countermodel = require("../models/counterModel");

cloudinary.config({
  cloud_name: "dlvnjt9ql",
  api_key: "635416963145875",
  api_secret: "LxiSS5NGcn7V_1EwA1nP6n-drvA",
});

router.post("/addReSellProduct", (req, res, next) => {
  // ----------------------------------------------------------------
  // rendering product data

  const file = req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    const item_name = req.body.item_name;
    const price = req.body.price;
    const category = req.body.category;
    const description = req.body.description;
    const img = result.url;
    const photoName = result.url;

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

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

        const newProductData = {
          // name,
          // birthdate,
          // photo
          id: seqId,
          item_name,
          price,
          category,
          description,
          img,
        };

        const userData = {
          id: seqId,
          name,
          email,
          phone,
          address,
          item_name,
          price,
          category,
          description,
          img,
        };

        const userProductData = {
          // name,
          // birthdate,
          // photo

          id: seqId,
          item_name,
          price,
          category,
          description,
          img,
        };

        const newProduct = new resellProduct(newProductData);
        const newUser = new User(userData);
        const reselluser = new userProduct(userProductData);
        newProduct.save();
        newUser.save();
        reselluser
          .save()
          .then(() => res.json("new product Added && new users product Added"))
          .catch((err) => res.status(400).json("Error: " + err));

        //------------------------------------------------------------------------------------------------------
        //email send to team Scrapyard
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "scrapyard66@gmail.com",
            pass: "xbbklsrylakfgtrk",
          },
          port: 465,
        });

        const htmlContent = `User added his product into Product list 
                                      Item_name         : ${req.body.item_name}
                                      Item_Price        : ${req.body.price}
                                      Item_Category     : ${req.body.category}
                                      Item_Description  : ${req.body.description}
                                      User'sName        : ${req.body.name}
                                      User'sEmail       : ${req.body.email}
                                      User'sPhone       : ${req.body.phone}
                                      User'sAddress     : ${req.body.address}
                                      ImageLink         : ${result.url}
                                      `;

        var toAdmin = {
          from: req.body.email,
          to: "scrapyard66@gmail.com",
          subject: "User added his product",
          text: htmlContent,
        };

        transporter.sendMail(toAdmin, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent to admin: " + info.response);
          }
        });

        //mail send to customer who added his product
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "scrapyard66@gmail.com",
            pass: "xbbklsrylakfgtrk",
          },
          port: 465,
        });

        const Content = `Dear ${newUser.name}, 
           Thank You for selling your Product on scrapYard.
           Your Product has been successfully added into Scrapyard's Product list
           Team ScrapYard.

                                      Item_name         : ${req.body.item_name}
                                      Item_Price        : ${req.body.price}
                                      Item_Category     : ${req.body.category}
                                      Item_Description  : ${req.body.description}
                                      User'sName        : ${req.body.name}
                                      User'sEmail       : ${req.body.email}
                                      User'sPhone       : ${req.body.phone}
                                      User'sAddress     : ${req.body.address}
                                      ImageLink         : ${result.url}
             `;

        var toCustomer = {
          from: "scrapyard66@gmail.com",
          to: req.body.email,
          subject: "Your Product is added to Scrapyard",
          text: Content,
        };

        transporter.sendMail(toCustomer, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent to customer: " + info.response);
          }
        });
      }
    );
  });
});

module.exports = router;