const express = require("express");
require("./configs/db");
const morgan = require("morgan");
const bookRouter = require("./Routers/books");
const userRouter = require("./Routers/users");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("start port 3000 server for express js");
});
