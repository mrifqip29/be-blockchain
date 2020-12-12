require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const RouteUser = require("./routes/User");
const RouteTrx = require("./routes/Transaksi");
const mongoose = require("mongoose");
const cors = require("cors");
const { CheckUser } = require("./middleware/middleware");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("error when connecting to db", e);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", RouteUser);
app.use("/trx", RouteTrx);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server run at port ${process.env.PORT}`);
});
