const db = require("../DB/db");
const express = require("express");
const router = express.Router();

router.get('/register', async (req, res) => {
    try {
        const foundUser = await db.insertUser({body:req.body});
        res.json(foundUser);
    }
    catch (err) {
        res.json(err);
    }
})