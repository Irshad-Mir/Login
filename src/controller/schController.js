const express = require("express");
const cron = require("node-cron");
//const index = require("/index.js");
const router = express.Router();
const schedular = async function (req, res) {
  try {
    var d = new Date();
    var min = d.getMinutes();
    var date = d.getDate();
    var month = d.getMonth();
    var hour = d.getHours();
   const s=   cron.schedule(`${min + 1} ${hour} ${date} ${month + 1} *`, () => {}, {
      scheduled: true,
      timezone: "Asia/kolkata",
    });
    

      res.status(201).json({ msg: "event completed",});
  } catch (error) {
    res.status(500).send("server error");
  }
};
module.exports = { schedular };
