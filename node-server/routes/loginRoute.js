const db = require("../DB/db");
const express = require("express");
const router = express.Router();

router.get('/login', async (req, res) => {
    try {
        const foundUser = await db.sendCredentialsFound({body:req.body});
        console.log(foundUser);
        res.send(foundUser);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
})