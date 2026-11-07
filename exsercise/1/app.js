const express = require("express");

const app = express();
app.use(express.json())
app.use(express.urlencoded())
require('./configs/db')

const courses = [
  { id: 1, title: "nodejs", price: 4_000_00 },
  { id: 2, title: "Reactjs", price: 5_000_00 },
  { id: 3, title: "Expressjs", price: 3_000_00 },
  { id: 4, title: "js", price: 1_000_00 },
];

app.get("/courses/:id", (req, res) => {
  const cours = courses.find((cors) => {
    return cors.id === Number(req.params.id);
  });
  res.send(cours);
});

app.put("/courses/:id", (req, res) => {
  res.status(200).send("put method");
});

app.post("/courses/", (req, res) => {
  console.log(req.body);
  
  res.status(200).send("post method");
});

app.delete("/courses/:id", (req, res) => {
  res.statusCode = 401;
  res.send("delete method");
});
app.listen(3000, () => {
  console.log("start port 3000 server for express js");
});
