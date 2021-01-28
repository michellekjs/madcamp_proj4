import React, { useState, useEffect, useContext} from 'react';
import { UserContext } from '../UserContext';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function LoginForm(props) {
    //token 확인
    console.log(props.value.token);

    //props.token;
    const [state, setState] = useState({userid : "",password : ""});
    const [status, setStatus] = useState("loading");
    const [tokenInfo, setTokenInfo] = useState("Not Yet!");


    //history
    const history = useHistory();
    
    // componentDidMount, componentDidUpdate와 같은 방식으로
    useEffect(() => {
      // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
      
    },[state]);

    const refreshPage = ()=>{
        window.location.reload();
     }


    function submitFunc(e){
        e.preventDefault();
        console.log(state.userid);
        console.log(state.password);
        console.log(state);
        //debugger;
        
        axios.post("http://192.249.18.234:5000/mongooseDB/user/login", state)
        .then((res) => {
            //debugger;
            //alert("HELLO")
            console.log(res);
            if(res.status == 200){
                setStatus("SuccessSuccess!");
                //UserContext 에서 쓰일 token 저장.
                props.value.setToken(res.data.token);
               
                //setTokenInfo(res.data.token);
                //history.push("/");

            }
            else{
              setStatus(404);
            }
        })
        .catch(err => {
          setStatus(123);
          alert("아이디와 비밀번호를 확인해주세요");
          console.log(err)
        });
    }
  
    return (
        <nav className="navbar navbar-expand-sm navbar-custom">
          {props.value.token.length < 13 ? 
          
          <React.Fragment>
            <li>
                <input 
                    className="nav-link" 
                    type="text" placeholder="ID" 
                    aria-label="Search"
                    onChange={e=>setState({...state, userid: e.target.value})}
                />
            </li>
            <li>
                <input 
                    className="nav-link" 
                    type="password" 
                    placeholder="Password" 
                    aria-label="Search"
                    onChange={e=>setState({...state, password: e.target.value})}
                />
            </li>
            <li>
                <button className="nav-link" onClick={submitFunc}>login</button>
            </li>
            </React.Fragment>
             :
                <React.Fragment>
                    <li>
                        <button onClick={refreshPage}>logout</button>
                    </li>
                </React.Fragment>
            
            }
            
        
        </nav>
    );
  }
  
  export default LoginForm;