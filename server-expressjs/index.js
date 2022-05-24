const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const todoRouter = require("./routes/todoRouter");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

app.use("/v1/todos", todoRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
