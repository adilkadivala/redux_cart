const mysql = require("mysql");

const connetc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cart",
});

module.exports = connetc;
