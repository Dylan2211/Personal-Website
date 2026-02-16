import express from "express";
import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
};
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/routes");
const frontendPath = path.join(__dirname, "../../frontend")
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ROUTES = {
  HOME: "/",
  MAINPAGE: "/mainpage"
}

app.use("/api", routes);

app.get(ROUTES.HOME, (req, res) => {
  res.redirect("mainpage/mainpage.html");
});

app.get(ROUTES.MAINPAGE, (req, res) => {
  res.sendFile(path.join(frontendPath, "mainpage/mainpage.html"));
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
