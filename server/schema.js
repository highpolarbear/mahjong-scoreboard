const mongoose = require("mongoose");
const { Schema } = mongoose;

// User schema
const userSchema = new Schema({
  name: String,
  score: Number,
});

const User = mongoose.model("User", userSchema);

// Match schema
const matchSchema = new Schema({
  score: Number,
  date: Date,
});

const Match = mongoose.model("Match", matchSchema);

module.exports = { User, Match };
