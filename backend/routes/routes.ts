const express = require("express");
const multer = require("multer");
const router = express.Router();
const controller = require("../controllers/controller");

const upload = multer({ dest: "images/" });