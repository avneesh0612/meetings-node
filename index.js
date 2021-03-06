const express = require("express");
const cors = require("cors");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
