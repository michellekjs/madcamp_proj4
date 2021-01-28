import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./todo-list.css";

const Todo = props => (
    <tr>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://192.249.18.234:5000/mongooseDB/todos')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div className="todolist">
                <h3 className="title" style={{fontWeight:'bold'}}>기숙사 게시판</h3>
                <Link to="./create">
                <button class="right"className="writebutton" float>게시물 작성하기</button></Link>
                <table className="table" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th className="tabletitle">제목</th>
                            <th className="tablewriter">작성자</th>
                            <th className="date">날짜</th>
                            <th className="edit">수정</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}