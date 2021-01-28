const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    todo_studentid : {type : String, Default : null},
    todo_description : {type : String, Default : null},
    todo_responsible : {type : String, Default : null},
    todo_priority : {type : String, Default : null},
    todo_completed : {type : String, Default : null}
});

module.exports = mongoose.model("todos2", todoSchema);