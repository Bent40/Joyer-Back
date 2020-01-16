const db = require("../DB/db");
const express = require("express");
const router = express.Router();

router.get('/login', async (req, res) => {
    console.log("i am in /login");
    try {
        const foundUser = await db.sendCredentialsFound({body:req.body})
        res.send(foundUser);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = router;