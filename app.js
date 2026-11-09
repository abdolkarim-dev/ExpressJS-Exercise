const express = require("express");
require("./configs/db");
const bookRouter = require("./Routers/books");
const userRouter = require("./Routers/users"); 
const app = express();

app.use(express.json());
app.use(express.urlencoded());
 
app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("start port 3000 server for express js");
});
