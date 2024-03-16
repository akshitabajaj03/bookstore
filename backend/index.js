const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book");
const authRoutes = require("./routes/authRoute");
const cookieParser = require("cookie-parser");

const PORT = 5555;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`App connected to database`);
  })
  .catch((err) => {
    console.log(err);
  });
