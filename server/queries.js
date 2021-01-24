const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const { User } = require("./schema");

// Connect to db
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

const createUser = async (req, res) => {
  const body = req.body;
  const user = new User(body);
  const result = await user.save();
  console.log("res", result);

  return res.send(body);
};

// const test = async (req, res) => {
//   const test = new User({
//     name: "Gavin",
//     score: 3,
//     index: 300,
//   });

//   await test.save(function (err, fluffy) {
//     if (err) return console.error(err);
//   });

//   //   Kitten.find(function (err, kittens) {
//   //     if (err) return console.error(err);
//   //     return res.send({ kittens });
//   //   });
//   //   res.status(500);
//   return res.send({ msg: "success" });
// };

module.exports = { createUser };
