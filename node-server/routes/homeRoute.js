const db = require("../DB/db");
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("i am in home route");
    try {
        res.send("im in home");
    }
    catch (err) {
        res.send(err);
    }
})

module.exports = router;