const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("yellow");
});

app.listen(3000);
