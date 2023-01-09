//sell product api

const router = require("express").Router();
let User = require("../models/userModel");
const nodemailer = require("nodemailer");
const cloudinary = require("cloudinary").v2;
const path = require("path");
var fs = require("fs");

const Product = require("../models/productModel");

cloudinary.config({
  cloud_name: "dlvnjt9ql",
  api_key: "635416963145875",
  api_secret: "LxiSS5NGcn7V_1EwA1nP6n-drvA",
});

router.post("/add", (req, res, next) => {
  //----------------------------------------image upload --------------------------
  const file = req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    const newUserData = new User({
      sname: req.body.sname,
      semail: req.body.semail,
      sphone: req.body.sphone,
      saddress: req.body.saddress,
      scategory: req.body.scategory,
      sdescription: req.body.sdescription,
      img: result.url,
    });

    newUserData
      .save()
      .then(() => res.json("Scrap is sold && seller Added"))
      .catch((err) => res.status(400).json("Error: " + err));

    // // ------------------------------------email send to admin-----------------------------------
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "scrapyard66@gmail.com",
        pass: "xbbklsrylakfgtrk",
      },
      port: 465,
    });

    const htmlContent = `
        Request for the pickup received 
                
                     Name        : ${req.body.sname}
                     Email       : ${req.body.semail}
                     Mobile      : ${req.body.sphone}
                     Address     : ${req.body.saddress}
                     Category    : ${req.body.scategory}
                     Description : ${req.body.sdescription}
                     ImageLink   : ${result.url}
                 `;

    // User.findOne({ photoName: photoName });

    var toAdmin = {
      from: req.body.semail,
      to: "scrapyard66@gmail.com",
      subject: "PICKUP SCHEDULED",
      text: htmlContent,
      // attachments: [{ filename: `${photoName}`, path: `./images/${photoName}` }],
    };

    transporter.sendMail(toAdmin, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent to admin: " + info.response);
      }
    });

    //------------------------------------email send to customer-----------------------------------

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "scrapyard66@gmail.com",
        pass: "xbbklsrylakfgtrk",
      },
      port: 465,
    });

    const Content = `Dear ${req.body.sname}, 
     Thank You for selling your scrap on scrapYard.
     Your request has been received be patient we will reach you within 2-3 days.
     for any querys call our free helpline no . +91 6764980464 or +91 7979897122
     Team ScrapYard.
       `;

    var toCustomer = {
      from: "scrapyard66@gmail.com",
      to: req.body.semail,
      subject: "We have Received Your request for Pickup",
      text: Content,
    };

    transporter.sendMail(toCustomer, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent to customer: " + info.response);
      }
    });
  });
});

router.route("/rec").get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;