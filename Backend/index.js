const ATLAS_URI =
  "mongodb+srv://SojwalIngle:Sojwal2000@scrapmanagementportal.mrnodmr.mongodb.net/ScrapManagementPortal";
const express = require("express");  
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("./routes/stripe");
const upload = require("./routes/allProduct");
const fileUpload = require("express-fileupload");
const app = express();
require("dotenv").config();
const port = 5000;

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(cors());
app.use(express.json());
app.use("/file", upload);
const url = ATLAS_URI;

//routes
app.use("/api/stripe", stripe);

const reSellProductRouter = require("./routes/allProduct");
app.use("/products", reSellProductRouter);

const reSellRouter = require("./routes/resellProduct");
app.use("/reSell", reSellRouter);

const userRouter = require("./routes/user");
app.use("/users", userRouter);

//for all
mongoose.connect(url);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo DB success");
});

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});