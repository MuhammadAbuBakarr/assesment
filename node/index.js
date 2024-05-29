const express = require("express");
const app = express();
const dotenv = require("dotenv");
// Configuring .env File
dotenv.config({ path: "./.env" });
// MongoDb Connection Instance
require("./database/connection");

// Dont have to use body-parser, Express has its own JSON parser.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing Routes
app.use(require("./routes/post"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
