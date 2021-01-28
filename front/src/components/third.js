import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import "./third.css";
import {Link, useHistory} from "react-router-dom";
import Select from "react-dropdown-select";
import {Dropdown} from 'react-bootstrap';
import { UserContext } from '../UserContext';
import axios from "axios";


const dorm_girl = ["아름관","세종관","여울관","나래관"];
const dorm_boy = ["진리관","성실관","사랑관","소망관","신뢰관","지혜관","희망관","미르관","나들관"]


function X19206() {

  //유저 토큰
  const { token } = useContext(UserContext);

  //history
  const history = useHistory();

  //버튼 클릭
  const [vitrualRoomState, setVirtualRoomState] = useState({
    founded_studentid : "",
    hope_domitory : "아름관",
    hope_numofpeople : "1",
    cost : "0",
    password : "",
    room_mates : [],
  });

  //비밀번호 확인
  const [verifyPassword, setVerifyPassword] = useState("123");

  useEffect(()=>{
    axios.get("http://192.249.18.234:5000/mongooseDB/auth", {headers: { token:token}})
          .then((res) =>{
            console.log("Auth client3")
            console.log(res.data);
            
            setVirtualRoomState({... vitrualRoomState,founded_studentid : res.data.studentid, room_mates : {studentid:res.data.studentid} });
            //setVirtualRoomState(vitrualRoomState.push({studentid : res.data.studentid}));
          })
          .catch(err => {
            window.scrollTo(0, 0);
            history.push('/');
            alert('로그인을 다시 해주세요.');
          })
  }, []);

  const calCost=(e)=>{
    console.log(e.target.value);
    let numofpeople = e.target.value;

    if(numofpeople == "1"){
      setVirtualRoomState({...vitrualRoomState, cost : "150,000", hope_numofpeople : numofpeople});
    }
    if(numofpeople == "2"){
      setVirtualRoomState({...vitrualRoomState, cost : "125,000", hope_numofpeople : numofpeople});
    }
    if(numofpeople == "3"){
      setVirtualRoomState({...vitrualRoomState, cost : "110,000", hope_numofpeople : numofpeople});
    }
    /*
    setVirtualRoomState({...vitrualRoomState, hope_numofpeople : e.target.value});
    console.log(vitrualRoomState.hope_numofpeople);
    console.log(vitrualRoomState);
    */
  }

  const nextPage=(e)=>{

    //console.log(vitrualRoomState);

    if(vitrualRoomState.password === "1"){
      
      //alert("개인정보 수집/이용에 동의해주세요.");
    }
    else{

      console.log(vitrualRoomState);

      axios.post("http://192.249.18.234:5000/mongooseDB/virtualRoom", vitrualRoomState)
          .then((res)=>{
              console.log(res.data.message);
              if(res.data.message == "failed"){
                alert("이미 생성한 가상방이 있습니다.");
                history.push('/');
              }
              else{
                alert("가상방이 성공적으로 생성되었습니다.");
                history.push('/fifth');
              }
              
          })

      
    }

  };



  return (
      <div data-layer="a211a3cf-d85f-42b6-9d3f-08df5839c087" className="x19206">
      <div data-layer="63e79938-adac-4f32-ab8e-7dab754bd25f" className="x60"></div>
      
      <button data-layer="cb6e3209-2668-4730-b6bf-0a4abfbcb0ed" className="xe4fd940e" onClick={nextPage}>신청하기</button>
      

      <div className="xb85768f7">희망생활관</div>
      <div className= "xcfc909f3">희망인실</div>

      <div class="form-group" className="x90" onChange={e=>setVirtualRoomState({...vitrualRoomState, hope_domitory : e.target.value})}>
          <select class="form-control">
            <option value="아름관">아름관</option>
            <option value="나래관">나래관</option>
            <option value="여울관">여울관</option>
            <option value="세종관">세종관</option>
          </select>
      </div>


      <div class="form-group" className="x91">
          <select class="form-control" id = "dropdown" onChange={calCost}>
            <option value = "1">1인실</option>
            <option value = "2">2인실</option>
            <option value = "3">3인실</option>
          </select>
      </div>

      <div data-layer="a9c47cce-bd67-48fc-8443-9237eb56eec0" className="xf8b49063">생활관비</div>
      <text className="money">{vitrualRoomState.cost}</text>
      

      <div data-layer="29f2e852-e4e5-4513-b269-bd9150849fef" className="x11fa90a0">
          <label>비밀번호<input style={{marginLeft:'250px'}} type="text" onChange={e=>setVirtualRoomState({...vitrualRoomState, password: e.target.value})}/></label>
      </div>

      <div data-layer="77d51183-9e9a-433a-8191-d047f9ee6cdc" className="x6e5ba27f">
          <label>비밀번호 확인<input style={{marginLeft:'200px'}} type="text" onChange={e=>setVerifyPassword(e.target.value)}/></label>
      </div>




      <div data-layer="30726e42-ae7b-4221-acd1-c0fb5a51673d" className="xf474a0e0">가상방 개설</div>
      <div data-layer="bb59167a-f589-42b6-8bc7-3ea5fdbbe120" className="x056ac83c">계절학기 신청</div>
      <svg data-layer="55efa90f-e74c-4d51-9c02-643979e1e103" preserveAspectRatio="none" viewBox="0 -1.5 170 3" className="x49"><path d="M 0 0 L 170 0"  /></svg>
      <div data-layer="de93d7d2-27b3-4d12-b992-ade2664a8cf8" className="x61"></div>
      <div data-layer="10abfa5f-3f92-49b8-b3df-5796b85dd235" className="x62"></div>
      <div data-layer="2e25054a-d308-476b-8a30-8a8499d379e9" className="x63"></div>
      <div data-layer="8dce32a5-7f98-4733-8e26-1cfcb5d0ce82" className="x64"></div>
      <svg data-layer="93a55509-ddd9-4129-9d75-b463e0fdfd05" preserveAspectRatio="none" viewBox="0 0 43 34" className="x1"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
      <svg data-layer="144f69bf-3a1d-4c56-b216-869e51c01e16" preserveAspectRatio="none" viewBox="0 0 43 34" className="x3"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
      <svg data-layer="2e71a3b3-0dda-456f-ab2a-1dddefa9cf4a" preserveAspectRatio="none" viewBox="0 0 43 34" className="x4"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
      <div data-layer="cb2edaae-3b44-432c-9b07-7bf330b32509" className="x067016c9">개인정보 확인<br /><br />정보제공 동의</div>
      <div data-layer="ce8bb04f-6015-42bc-829d-33d1ae22c4a0" className="x0f2d0489">신청 사유 작성 <br /><br />가상방 설정</div>
      <div data-layer="e558e9cf-64a5-41bc-85d9-4946eca6b9b7" className="x0b8f7665">가상방 개설/참여</div>
      <div data-layer="ac3402c0-c775-46eb-b366-7bd58f798d57" className="x">신청 완료</div>
  </div>
  );
  
}

export default X19206;
