const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name : {type : String, Default : null},
    studentid : {type : String, Default : null},
    userid : {type : String, Default : null},
    department : {type : String, Default : null},
    degree : {type : String, Default : null},
    email : {type : String, Default : null},
    phone : {type : String, Default : null},
    current_residence : {type : String, Default : null},
    bank : {type : String, Default : null},
    bank_account_number : {type : String, Default : null},
    bank_account_name : {type : String, Default : null},
    date : { type: Date, default: Date.now },
    virtual_room_id : {type : String, Default : null}
});

module.exports = mongoose.model("dormitory", StudentSchema);
