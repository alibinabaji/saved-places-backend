const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const listsRouter = require("./routes/lists");
const locationsRouter = require("./routes/locations");

const app = express();
const port = 5000;
console.log("here");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/lists", listsRouter);
app.use("/locations", locationsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
