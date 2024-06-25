require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./database/connect");
const apiData = require("./routes/product");

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/", apiData);

// server port
server_port = process.env.PORT;

database.connect((err) => {
  if (err) {
    console.error(err.message);
    return;
  } else {
    console.log("database connected");
    app.listen(server_port, () => {
      console.log(`server started on ${server_port}`);
    });
  }
});
