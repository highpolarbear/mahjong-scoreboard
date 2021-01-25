const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const queries = require("./queries");

var jsonParser = bodyParser.json();

// Routes
router.post("/create-user", jsonParser, queries.createUser); // {"name": "username"}
router.get("/get-all-user", jsonParser, queries.getAllUser); // {}
router.get("/find-user", jsonParser, queries.findUser); // {"name": "username"}
router.post("/log-match", jsonParser, queries.logMatch); // {"score":"3", "isSelfDraw": "false", "players": {"winner":"id", "loser":["id"]}}
router.get("/find-match-by-id", jsonParser, queries.findMatchById); // {"id": "id"}
router.get(
  "/find-match-by-date-range",
  jsonParser,
  queries.findMatchByDateRange
); // {"start": "2021-01-01T00:00:00.000+00:00", "end": "2021-01-01T12:00:00.000+00:00"}

module.exports = router;
