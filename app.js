const express = require("express");
require("./configs/db");
const morgan = require("morgan");
const bookRouter = require("./Routers/books");
const userRouter = require("./Routers/users");
const path = require("path");
const app = express();
const viewsPath = require("./utils/viewPath");
const { error } = require("console");
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));


const teacherModel = require('./models/teachers')
const courcesModel = require('./models/courses')



app.get("/", (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(viewsPath, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(viewsPath, "contact.html"));
});

app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);

 app.use((req, res, next) => {

  return res.sendFile(path.join(viewsPath,'404.html'))

  // res.status(404).json({
  //   error: {
  //     body: "404 error",
  //     message: "page not found",
  //   },
  // });
});

app.listen(3000, () => {
  console.log("start port 3000 server for express js");
});
