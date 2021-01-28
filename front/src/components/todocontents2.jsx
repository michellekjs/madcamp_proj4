
import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import "./todocontents.css";

class X192025 extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    }
}

componentDidMount() {
  console.log("Hello");
  console.log(this.props);
 
    axios.get('http://192.249.18.234:5000/mongooseDB/todos2/board/'+this.props.match.params.id)
        .then(response => {
          console.log(response);
            this.setState({
                todo_description: response.data.todo_description,
                todo_responsible: response.data.todo_responsible,
                todo_priority: response.data.todo_priority,
                todo_completed: response.data.todo_completed
            })   
        })
        .catch(function (error) {
            console.log(error);
        })
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

onChangeTodoPriority(e) {
    this.setState({
        todo_priority: e.target.value
    });
}

onChangeTodoCompleted(e) {
    this.setState({
        todo_completed: !this.state.todo_completed
    });
}

onSubmit(e) {
    e.preventDefault();
    const obj = {
        todo_description: this.state.todo_description,
        todo_responsible: this.state.todo_responsible,
        todo_priority: this.state.todo_priority,
        todo_completed: this.state.todo_completed
    };
    console.log(obj);
    axios.post('http://192.249.18.234:5000/mongooseDB/todos2/update/'+this.props.match.params.id, obj)
        .then((res) => {
            console.log(res.data)
            this.props.history.push('/board');
        });
    
    
}
  
  render() {
    
    return (
          <div data-layer="ad87d33f-27b0-4237-8b74-57ee5f53c256" className="x192025">        <div data-layer="3da3e107-2717-4340-a233-8aa92dd43a92" className="x64"></div>
        <div data-layer="caaa3091-c26b-49d0-b6d6-49a9d64ebd38" className="x115"></div>
        <div data-layer="d5e55ced-936c-45dc-a144-868662dbbca2" className="x0a7b8552">{this.state.todo_description}</div>
        <div data-layer="3103cf32-294d-41f3-8fe2-5c0760f6ea89" className="x19d204ef">{this.state.todo_completed}</div>
        <div data-layer="67b1091f-77e8-4a5b-94f7-264a1382269b" className="x76b97ad9">게시판</div>
        <svg data-layer="4050294a-3621-4afd-b584-5ec58d6f0367" preserveAspectRatio="none" viewBox="0 -1.5 1120 3" className="x49"><path d="M 0 0 L 1120 0"  /></svg>
  </div>

    );
  }
}

X192025.propTypes = {

}

X192025.defaultProps = {

}


export default X192025;
          