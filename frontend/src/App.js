import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import X19201 from "./components/19201";
import X19204 from "./components/apply";
import X19205 from "./components/second";
import X19206 from "./components/third";
import X19207 from "./components/fourth";
import X19208 from "./components/fifth";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>    
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand"> KAIST Dormitory System</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navber-item">
                  <Link to="/board" className="nav-link">생활관 안내</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/apply" className="nav-link"> 생활관 신청</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/board" className="nav-link">게시판</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route exact path = "/" component={X19201}/>
          <Route path = "/apply" component={X19204}/>
          <Route path = "/second" component={X19205}/>
          <Route path = "/third" component ={X19206}/>
          <Route path = "/fourth" component ={X19207}/>
          <Route path = "/fifth" component ={X19208}/>
          <Route path = "/board" component = {TodosList}/>
          <Route path = "/create" component = {CreateTodo}/>
          <Route path ="/edit" component={EditTodo}/>
      </Router>
    );
  }
}

export default App;
