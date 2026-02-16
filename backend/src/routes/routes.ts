import express from "express";
const multer = require("multer");
const router = express.Router();
const controller = require("../controllers/controller");

const upload = multer({ dest: "images/" });

export = router;