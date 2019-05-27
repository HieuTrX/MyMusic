const express = require("express");
const getSong = require("./song");
const getTop100 = require("./top100");

const router = express.Router();

router.get("/song", getSong);

router.get("/top100/:type", getTop100);

module.exports = router;
