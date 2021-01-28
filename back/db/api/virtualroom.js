const express = require("express");
const { findOne } = require("../models/userVirtualRoomSchema");
const router = express.Router();
const virtualRoomInfo = require("../models/userVirtualRoomSchema");
const jwt = require('jsonwebtoken');

//가상방 생성
router.post('/', function(req,res){

    const virtualroominfo = new virtualRoomInfo({
        founded_studentid : req.body.founded_studentid,
        hope_domitory : req.body.hope_domitory,
        hope_numofpeople : req.body.hope_numofpeople,
        cost : req.body.cost,
        password : req.body.password,
        room_mates : req.body.room_mates,
    });
    virtualroominfo
        .save()
        .then(result => {
            console.log(result);
            res.json({message : "success"})
            //res.json(testStudent);
        })
        .catch(err => {
            res.json({message : "failed"});
            console.log(err);
        });
});


router.get('/info', authenticateToken, async (req, res) => {
    //console.log("HI virtualRoomInfo API");
    //console.log(req.user.studentid);
    //const virtualroominfo = await virtualRoomInfo.find({room_mates : { studentid : req.user.studentid }});
    
    const virtualroominfo = await virtualRoomInfo.findOne({ room_mates : { $elemMatch : { studentid : req.user.studentid} } });
    //console.log(virtualroominfo);
    
    if (!virtualroominfo) return res.status(404).json({ message: 'Users Not Found!' });
    else{
        res.status(200).json(virtualroominfo);
    }
    
   
});

//가상방 참여
router.post('/attend', async function(req,res){
    console.log("가상방 참여 req");
    console.log(req.body);

    const virtualroom = await virtualRoomInfo.findOne({password : req.body.password, founded_studentid : req.body.founded_studentid});

    if(!virtualRoomInfo){
        res.json({message : "failed"});
    }

    let new_room_mates = virtualroom.room_mates;
    new_room_mates.push({studentid : req.body.studentid});
    console.log(new_room_mates);
    await virtualRoomInfo.updateOne({founded_studentid : req.body.founded_studentid},{room_mates : new_room_mates});
    

});



function authenticateToken(req,res,next){
    //console.log("HI virtualinfo middleware!");
    const token = req.headers.token;
    
    //const token = authHeader && authHeader.split('.')[1];
    console.log(token);
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, "secretToken", (err, user) =>{
        if(err) return res.sendStatus(403);
        //console.log("HI virtualinfo middleware!1123");
        //console.log(user);
        req.user = user;
        next();
    });
    
};


module.exports = router;