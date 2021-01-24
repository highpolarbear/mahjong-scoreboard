const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./router");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
