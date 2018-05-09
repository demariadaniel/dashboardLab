const express = require("express");
const router  = express.Router();
const bodyParser = require("body-parser");
const knex = require("knex")(require("../knexfile"));
const bookshelf = require("bookshelf")(knex);
const Student = bookshelf.Model.extend({
  tableName: "student"
});

router.get("/", (req, res) => {
  Student.fetchAll().then(students => {
    console.log(students);
    res.send(students);
  });
});

router.post("/", (req, res) => {
  let newStudent = new Student(req.body);
  console.log(newStudent);
  res.send("TODO");
});

router.put("/", (req, res) => {
  Student.fetchAll().then(students => {
    console.log(students);
    res.send(students);
  });
});

router.delete("/", (req, res) => {
  Student.fetchAll().then(students => {
    console.log(students);
    res.send(students);
  });
});

module.exports = router;