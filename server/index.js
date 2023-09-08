require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/authRoute");

app.use("/", routes);
app.use(express.json());

const connectDB = require("./config/dbCon");
const startServer = (app) => {
  connectDB();
  app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server is listening on Port No: ${process.env.PORT}`);
  });
};

startServer(app);
