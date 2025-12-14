const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/routes.js");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.redirect("/mainpage");
});

app.get("/mainpage", (req, res) => {
  res.sendFile(path.join(__dirname, "mainpage.html"));
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ message: "Internal server error" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
