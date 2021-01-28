const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const router = express.Router();
const jwt = require('jsonwebtoken');

const domitoryInfo = require("../models/userDomitorySchema");

//정보 다 가져오기
router.get('/' , function(req,res){
    domitoryInfo.find(function(err, domitory){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(domitory);
    })

    //res.send("Domitory Happy");
});


//유저 기숙사 정보 생성
router.post('/', function(req,res){

    const testStudent = new domitoryInfo({
        name : req.body.name,
        studentid : req.body.studentid,
        userid : req.body.userid,
        department : req.body.department,
        degree : req.body.degree,
        email : req.body.email,
        phone : req.body.phone,
        current_residence : req.body.current_residence,
        bank : req.body.bank,
        bank_account_number : req.body.bank_account_number,
        bank_account_name : req.body.bank_account_name,
        virtual_room_id : req.body.virtual_room_id
    });

    testStudent
        .save()
        .then(result => {
            console.log(result);
            res.json(testStudent);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/info', authenticateToken, async (req, res) => {
    
    //console.log(req.headers);
    //console.log(req.headers.token);
    //console.log("------------");
    //console.log(req.user);
    //console.log("------------");
    const domitoryinfo = await domitoryInfo.findOne({ userid : req.user.userid });

    if (!domitoryinfo) return res.status(404).json({ message: 'Users Not Found!' });
    else{
        res.status(200).json(domitoryinfo);
    }
});

function authenticateToken(req,res,next){
    const token = req.headers.token;
    
    //const token = authHeader && authHeader.split('.')[1];
    console.log(token);
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, "secretToken", (err, user) =>{
        if(err) return res.sendStatus(403);
        console.log(user);
        req.user = user;
        next();
    });
    
};

module.exports = router;