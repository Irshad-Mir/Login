const express = require("express");
const router = express.Router();
const schController = require("../controller/schController");

router.post("/schedular", schController.schedular);


module.exports = router;
