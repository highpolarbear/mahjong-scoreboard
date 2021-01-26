const mongoose = require("mongoose");
const { use } = require("./router");
const DB_URL = process.env.DB_URL;
const { User, Match } = require("./schema");

// Connect to db
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

// User queries
const createUser = async (req, res) => {
  const body = req.body;
  const user = new User(body);
  var result;
  try {
    result = await user.save();
    console.log("res", result);
  } catch (err) {
    res.status(400);
    return res.send("Error: Bad request. Name already exists.");
  }
  return res.send(result);
};

const getAllUser = async (req, res) => {
  const result = await User.find({});
  console.log(result);
  return res.send({ result });
};

const findUser = async (req, res) => {
  const body = req.body;
  const result = await User.findOne({ _id: body.id });
  return res.send(result);
};

const modifyUserScore = async (isSelfDraw, players, score) => {
  if (!isSelfDraw && players.loser.length > 0) {
    throw new "Non-self-draw matches cannot have more than one loser."();
  }
  if (players.winner && players.loser) {
    const winner = await User.updateOne(
      { _id: players.winner },
      { $inc: { score: isSelfDraw ? score * players.loser.length : score } }
    ).exec();
    const loser = await User.updateMany(
      { _id: { $in: players.loser } },
      { $inc: { score: score * -1 } }
    ).exec();
    return { winner, loser };
  } else {
    return "Please check your input.";
  }
};

// Match queries
const logMatch = async (req, res) => {
  const body = req.body;
  const match = new Match(body);
  try {
    const matchRes = await match.save();
    const updateUserRes = await modifyUserScore(
      body.isSelfDraw,
      body.players,
      body.score
    );
    return res.send({ matchRes, updateUserRes });
  } catch (err) {
    res.status(400);
    return res.send(err);
  }
};

const findMatchByDateRange = async (req, res) => {
  const body = req.body;
  try {
    const result = await Match.find({
      date: {
        $gte: body.start,
        $lt: body.end,
      },
    });
    return res.send(result);
  } catch (err) {
    // res.status(500);
    return res.send(err);
  }
};

const findMatchById = async (req, res) => {
  const body = req.body;
  console.log(body.id);
  try {
    const result = await Match.findById({ $in: body.id });
    return res.send(result);
  } catch (err) {
    // res.status(500);
    return res.send(err);
  }
};

module.exports = {
  createUser,
  getAllUser,
  findUser,
  logMatch,
  findMatchById,
  findMatchByDateRange,
};
