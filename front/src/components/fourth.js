
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {Link, useHistory} from "react-router-dom";
import { UserContext } from '../UserContext';
import axios from "axios";
import "./fourth.css";

function X19209(){

  //유저 토큰
  const { token } = useContext(UserContext);

  //history
  const history = useHistory();

  //roomate
  const [state, setState] = useState({
    founded_studentid : "",
    password : "",
    studentid : ""
  });

  useEffect(()=>{

    axios.get("http://192.249.18.234:5000/mongooseDB/auth", {headers: { token:token}})
          .then((res) =>{
            console.log("Auth client4")
            console.log(res.data);
            
            setState({... state, studentid : res.data.studentid});
            //setVirtualRoomState(vitrualRoomState.push({studentid : res.data.studentid}));
          })
          .catch(err => {
            window.scrollTo(0, 0);
            history.push('/');
            alert('로그인을 다시 해주세요.');
          })

  },[]);

  function searchVirtualRoom(e){
    console.log(state);
    axios.post("http://192.249.18.234:5000/mongooseDB/virtualRoom/attend", state)
          .then((res) =>{
            console.log("결과는?");
            console.log(res);
            if(res.data.message === "failed"){
              alert("기본 정보를 다시 확인해주세요.");
            }
            else{
              alert("가상방 참여 완료되었습니다.");
            }
          })
          .catch(err => {
            alert('정보를 다시 입력해주세요.');
          })
  }

  const nextPage=(e)=>{
    history.push('./fifth');
  }

  return (
    <div data-layer="5c76a024-e719-4f1a-9505-47aeaa0b8f66" className="x19209">        
    <div data-layer="8a987bc1-0551-48cb-adab-67bb632577bb" className="x482ce09d">계절학기 신청</div>
    <svg data-layer="c62c4695-7a7d-45ab-b7e5-2925ba2aac27" preserveAspectRatio="none" viewBox="0 -1.5 170 3" className="x49"><path d="M 0 0 L 170 0"  /></svg>
    <div data-layer="2e3a8bc1-9309-466c-89c9-bdccdaa95e44" className="x60"></div>
    
    <a className="xb8b017bc" onClick={nextPage}>다음단계</a>
    <div data-layer="34bd41a1-51b6-4517-83c6-aec2da8c3369" className="xc5c92f45">룸메이트 학번</div>

    
      <label><input type="text" className="x90" placeholder="학번을 입력하세요" onChange={e=>setState({...state, founded_studentid : e.target.value})}/></label>


    <div data-layer="8c133eb5-3bd7-4e52-9819-1e687b9990ef" className="xe043deab">가상방 참여</div>
    
    

      

    <div data-layer="3bd54ca4-6c28-475e-b7fd-ecbe8f56c9c7" className="xd0cc22b0">가상방 비밀번호</div>
    <svg data-layer="0168a967-65d9-44f6-a483-cbaaec6e2fa3" preserveAspectRatio="none" viewBox="0 0 43 34" className="x55867e0f1"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
    
      <label><input type="text" className="x96" placeholder="비밀번호를 입력하세요" onChange={e=>setState({...state, password: e.target.value})}/></label>

    <div data-layer="a0613516-9c5f-4000-9e83-53cd1faf8373" className="x97"></div>
    <div data-layer="6a13627b-d84a-4fe6-aac3-f023e8671abc" className="x254483a1" onClick={searchVirtualRoom}>입장</div>
    
    <div data-layer="4ca2da34-b638-438a-9f6d-a9709d95ac72" className="x61"></div>
    <div data-layer="032640ec-5e49-4b87-a664-c8187bb32868" className="x62"></div>
    <div data-layer="b8b5ccc4-62cf-4ff4-a789-5cecf021b74f" className="x63"></div>
    <div data-layer="0a36ed69-19e7-46e2-92be-60ca9cb6403a" className="x64"></div>
    <svg data-layer="332884ed-c91e-491d-872e-fbf048275262" preserveAspectRatio="none" viewBox="0 0 43 34" className="x1"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
    <svg data-layer="a34d5f83-d95c-4930-9452-e5247c482cef" preserveAspectRatio="none" viewBox="0 0 43 34" className="x3"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
    <svg data-layer="2d551478-b7ac-40e4-924a-3a70b90fe298" preserveAspectRatio="none" viewBox="0 0 43 34" className="x4"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
    <div data-layer="67619069-bb4d-45e8-b377-e3b287f60f02" className="x87d59db1">개인정보 확인<br /><br />정보제공 동의</div>
    <div data-layer="0bfb5240-9ed5-43fa-940b-74ea28481c35" className="xd11a16ed">신청 사유 작성 <br /><br />가상방 설정</div>
    <div data-layer="2c0a7999-b382-47c2-a6b8-ef737b0d9243" className="x6b8dc4e0">가상방 개설/참여</div>
    <div data-layer="83feaed5-6079-46ce-ba4d-b4420fdb0d34" className="x">신청 완료</div>
  </div>
  );
  
}


export default X19209;
          