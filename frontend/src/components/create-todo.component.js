import React, { Component } from 'react';
import axios from 'axios';
export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodo(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:3000/todos/create', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>게시물 작성하기</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>제목 </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>내용 </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="등록하기" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}