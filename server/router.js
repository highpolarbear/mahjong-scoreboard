const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const queries = require("./queries");

var jsonParser = bodyParser.json();

// Routes
router.post("/create-user", jsonParser, queries.createUser);

module.exports = router;
