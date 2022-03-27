const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
const http = require("http").createServer(app);
http.listen(5000, function () {
  console.log("listening on 5000");
});
app.use(express.static(path.join(__dirname, "dayboard/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/dayboard/build/index.html"));
});
