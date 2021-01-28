import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import React, {Component, useState , useMemo} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import X19201 from "./components/19201";
import X19204 from "./components/apply";
import X19205 from "./components/second";
import X19206 from "./components/third";
import X19207 from "./components/fourth";
import X19208 from "./components/fifth";
import Dorm from "./components/dorms";
import X192023 from "./components/mypage"
import CreateTodo from "./components/create-todo.component";
//import EditTodo from "./components/edit-todo.component";
import EditTodo from "./components/todocontents";
import TodosList from "./components/todos-list.component";
import CampusMap from "./components/campusmap";

import CreateTodo2 from "./components/create-todo.component2";
//import EditTodo2 from "./components/edit-todo.component2";
import EditTodo2 from "./components/todocontents2";
import TodosList2 from "./components/todos-list.component2";
import { UserContext } from './UserContext';
import LoginForm from "./components/LoginForm";
import TodoContents from './components/todocontents';
import Footer from './footer'
import './App.css';



const App = () =>{

  const [token, setToken] = useState("1");
  const providerValue = useMemo( () => ({token, setToken}), [token, setToken]);

    return (
      <Router>    
          <nav className="navbar navbar-expand-sm navbar-custom">
            <Link to="/" className="navbar-brand"> KDS</Link>
              <ul className="navbar-nav ml-auto">
                <li className="navber-item">
                    <Link to="/campusmap" className="nav-link" >캠퍼스 맵</Link>
                </li>
                <li className="navber-item">
                  <Link to="/dorm" className="nav-link" >생활관 안내</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/apply" className="nav-link"> 생활관 신청</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/board" className="nav-link">Notice</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/board2" className="nav-link">수리유지보수</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/mypage" className="nav-link">MyPage</Link>
                </li>
                
                <LoginForm value={{token,setToken}}/>
                
              </ul>
          </nav>
 
          
          <UserContext.Provider value={providerValue}>
            <Route exact path = "/" component={X19201}/>
            <Route path = "/apply" component={X19204}/>
            <Route path = "/second" component={X19205}/>
            <Route path = "/third" component ={X19206}/>
            <Route path = "/fourth" component ={X19207}/>
            <Route path = "/fifth" component ={X19208}/>
            <Route path = "/board" component = {TodosList}/>
            <Route path = "/create" component = {CreateTodo}/>
            <Route path ="/edit/:id" component={EditTodo}/>
            <Route path = "/dorm" component={Dorm}/>
            <Route path="/mypage" component ={X192023}/>
            
            <Route path = "/board2" component = {TodosList2}/>
            <Route path = "/create2" component = {CreateTodo2}/>
            <Route path ="/edit2/:id" component={EditTodo2}/>
            <Route path ="/campusmap" component={CampusMap}/>
            <Route path ="/todoContents" component={TodoContents}/>
          </UserContext.Provider>

      </Router>
    );
  
};

export default App;
