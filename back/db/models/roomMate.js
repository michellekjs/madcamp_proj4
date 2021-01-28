const mongoose = require("mongoose");

const roomMateSchema = mongoose.Schema({
    studentid : {type : String, unique: true, Default : null},
});

module.exports = mongoose.model("roommates", roomMateSchema);