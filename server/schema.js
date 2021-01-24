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
  players: {
    winner: {
      type: mongoose.ObjectId,
      required: true,
    },

    loser: {
      type: [
        {
          type: mongoose.ObjectId,
        },
      ],
      validate: [arrayLimit, "{PATH} exceeds the limit of 3"],
    },
  },
});

function arrayLimit(val) {
  return val.length <= 3;
}

const Match = mongoose.model("Match", matchSchema);

module.exports = { User, Match };
