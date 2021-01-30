const mongoose = require("mongoose");
const { Schema } = mongoose;

// User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

// Match schema
const matchSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isSelfDraw: {
    type: Boolean,
    default: false,
  },
  players: {
    winner: {
      type: mongoose.ObjectId,
      required: true,
      ref: "User",
    },

    loser: {
      type: [
        {
          type: mongoose.ObjectId,
          ref: "User",
        },
      ],
      validate: [arrayLimit, "{PATH} wrong number of losers."],
    },
  },
});

function arrayLimit(val) {
  return val.length >= 1 && val.length <= 3;
}

const Match = mongoose.model("Match", matchSchema);

module.exports = { User, Match };
