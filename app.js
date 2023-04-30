const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/post");
const cors = require("cors");

dotenv.config();
const URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;

const app = express();

const http = require("http").Server(app);

app.use(cors());

app.use(bodyParser.json());

app.use(postRoutes);

mongoose.connect(URI).then((result) => {
  http.listen(PORT);
  console.log(`server is running ${PORT}`);
});
