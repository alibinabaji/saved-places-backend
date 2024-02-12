const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all locations by list ID
router.get("/:listId", (req, res, next) => {
  const { listId } = req.params;
  db.query(
    "SELECT * FROM locations WHERE list_id = ?",
    [listId],
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.json(results);
    }
  );
});

// Create a new location
router.post("/addLocation", (req, res, next) => {
  const { listId, name, latitude, longitude } = req.body;
  db.query(
    "INSERT INTO locations (list_id, name, latitude, longitude) VALUES (?, ?, ?, ?)",
    [listId, name, latitude, longitude],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(201).send("Location added successfully");
    }
  );
});

module.exports = router;
