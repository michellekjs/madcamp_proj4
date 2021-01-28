const mongoose = require("mongoose");
const roomate = require("./roomMate");

const UserVirtualRoomSchema = mongoose.Schema({
    founded_studentid : {type : String, unique : true, Default : null},
    hope_domitory : {type : String, Default : null},
    hope_numofpeople : {type : String, Default : null},
    cost : {type : String, Default : null},
    password : {type : String, Default : null},
    room_mates : [roomate.schema],
});

module.exports = mongoose.model("virtualRoom", UserVirtualRoomSchema);
