const db = require("../DB/db");
const express = require("express");
const router = express.Router();

router.get('/login', async (req, res) => {
    try {
        const foundUser = await db.sendCredentialsFound({body:req.body});
        res.json(foundUser);
    }
    catch (err) {
        res.json(err);
    }
})