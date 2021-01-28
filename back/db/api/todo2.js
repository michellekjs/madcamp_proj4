const express = require("express");
const router = express.Router();
const Todo = require("../models/todo2Schema");


router.get('/', function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});


router.get('/board/:id', function(req, res) {
    console.log("Hi board");
    console.log(req);
    let id = req.params.id;
    console.log(id);
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

router.get('/board', function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

router.post('/edit/:id', function(req, res) {
    console.log("-------------");
    console.log(req.params);
    console.log("-------------");
    //todo.todo.studentid = req.body.todo_studentid;
    Todo.findById(req.params.id, function(err, todo) {

        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.post('/create', function(req, res) {

    let todo = new Todo(req.body);
    console.log(todo);

    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

module.exports = router;