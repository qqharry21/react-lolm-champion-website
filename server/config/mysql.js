var mysql2 = require("mysql2");

const db = mysql2.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "lolm-web",
  multipleStatements: true,
});

module.exports = db;