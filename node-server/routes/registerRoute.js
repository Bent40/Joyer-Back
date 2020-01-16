const db = require("../DB/db");
const express = require("express");
const router = express.Router();

router.get('/register', async (req, res) => {
    try {
        const insertedUser = await db.insertUser({body:req.body});
        console.log(insertedUser);
        res.send(insertedUser);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = router