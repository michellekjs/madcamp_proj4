const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const router = express.Router();
const jwt = require('jsonwebtoken');



router.get('/', async (req,res)=>{

    const token = req.headers.token;
    console.log("/auth token")
    console.log(token);
    if(token == null) return res.sendStatus(401);

    const verified = await jwt.verify(token, "secretToken");
    console.log("/auth token")
    console.log(verified);
    res.json(verified);
});

module.exports = router;