var express = require("express");
var dotenv = require("dotenv");
var cors = require("cors");
var path = require("path");
var routes = require("./routes/routes.js");
var app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.get("/", function (req, res) {
    res.redirect("/mainpage");
});
app.get("/mainpage", function (req, res) {
    res.sendFile(path.join(__dirname, "mainpage.html"));
});
app.use(function (req, res, next) {
    res.status(404).json({ message: "Route not found" });
});
app.use(function (err, req, res, next) {
    console.error("Unhandled error:", err.stack);
    res.status(500).json({ message: "Internal server error" });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});
