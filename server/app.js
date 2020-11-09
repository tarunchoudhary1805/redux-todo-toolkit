const express = require("express");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
const todoList = [];

app.get("/", (req, res) => {
  res.json(todoList);
});

app.post("/create", (req, res) => {
  const todoItem = {
    id:uuidv4(),
    title:req.body.title
  }
  todoList.push(todoItem)
  console.log(todoList);
  res.sendStatus(201)
});

app.listen(8080, () => {
  console.log(`Server Started on port : 8080`);
});
