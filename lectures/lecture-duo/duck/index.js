const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/ducks", (req, res) => {
  res.sendFile(__dirname + "/public/duck.html");
});

app.get("/endpoint", (req, res) => {
  res.send({ message: "OK OK OK" });
});

app.listen(3000, () => {
  console.log({ message: "The server is running on port " + 3000 });
});
