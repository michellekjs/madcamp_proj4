const express = require("express");
const router = express.Router();




const mongoose = require("mongoose");
mongoose.connect("mongodb://admin:admin@cluster0-shard-00-00.wcgex.mongodb.net:27017,cluster0-shard-00-01.wcgex.mongodb.net:27017,cluster0-shard-00-02.wcgex.mongodb.net:27017/Madcamp4?ssl=true&replicaSet=atlas-4xzlma-shard-0&authSource=admin&retryWrites=true&w=majority", 
    {useNewUrlParser : true, useUnifiedTopology:true }, ()=>
    console.log("connect to database!")
);

var userRouter = require('./api/user');
var domitoryRouter = require('./api/domitory');
var authRouter = require('./api/auth');
var todoRouter = require('./api/todo');
var virtualRooomRouter = require('./api/virtualroom');

router.use('/user', userRouter);
router.use('/userDomitory', domitoryRouter);
router.use('/auth', authRouter);
router.use('/todos', todoRouter);
router.use('/virtualRoom', virtualRooomRouter);
module.exports = router;
