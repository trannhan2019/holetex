const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoute');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('connected'))
  .catch((e) => console.log(e));

app.use('/v1/user', userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
