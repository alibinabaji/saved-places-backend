const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all lists
router.get("/getAll", (req, res, next) => {
  db.query("SELECT * FROM lists", (err, results) => {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

// Create a new list
router.post("/addLists", (req, res, next) => {
  const { name } = req.body;
  db.query("INSERT INTO lists (name) VALUES (?)", [name], (err, result) => {
    if (err) {
      return next(err);
    }
    const newList = { id: result.insertId, name };
    res.status(201).json(newList);
  });
});

module.exports = router;
