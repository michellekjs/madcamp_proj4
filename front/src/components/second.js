import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./second.css";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Checkbox from 'react-simple-checkbox';
import Select from "react-dropdown-select";
import { UserContext } from '../UserContext';

//const check_items = ["학생지원팀 추천", "방과 후 교사", "외국인,국내 무연고자", "카이스트 및 타대학 계절학기", "글로벌 리더쉽센터 추천", "입학홍보팀 추천", "기초논술","어학강좌","URP","기타/개인사유","IT강좌","카이스트 신문사/방송국 추천"];
//const checK-items2 = ["가상방 개설","가상방 참여"];
const dorm_girl = ["아름관","세종관","여울관","나래관"];
const dorm_boy = ["진리관","성실관","사랑관","소망관","신뢰관","지혜관","희망관","미르관","나들관"]

function X19205() {

  //history
  const history = useHistory();

  //버튼 클릭
  const [state, setState] = useState({
      checked:false,
      button:true
  });

  //지원 사유 및 개설방 개설여부 
  const [apply, setApply] = useState({
    reason : "1",
    virtualRoomOpeningStatus : "1"
  })

  //유저 토큰
  const { token } = useContext(UserContext);


  useEffect(()=>{

    axios.get("http://192.249.18.234:5000/mongooseDB/auth", {headers: { token:token}})
          .then((res) =>{
            console.log("Auth client")
            console.log(res.data);
          })
          .catch(err => {
            window.scrollTo(0, 0);
            history.push('/');
            alert('로그인을 다시 해주세요.');
          })
  }, []);


  const handleClick=e=>{
      setState({button:!state.button})
  };


  //동의 버튼 후 페이지 넘기기
  const nextPage=(e)=>{
      if(state.button){
        alert("개인정보 수집/이용에 동의해주세요.");
      }

      else if(apply.reason === "1" || apply.virtualRoomOpeningStatus === "1"){
        alert("신청 사유 선택 및 가상방 설정을 해주세요.")
      }
      else if(apply.virtualRoomOpeningStatus == "attend"){
        window.scrollTo(0, 0);
        history.push('/fourth');
      }
      else{
        window.scrollTo(0, 0);
        history.push('/third');
      }
  };

  return (
      <div data-layer="4570a4d4-3bfb-4848-9a85-55433dba2e12" className="x19205">        
        <div data-layer="62a58f7a-cc17-4a46-b923-5823c2fba662" className="xcbfc506a">신청 사유 선택</div>
        <div data-layer="3ad99625-5105-4d9d-937d-42c02722b671" className="x66"></div>
        <div data-layer="383b9833-51ee-47fb-9c2b-e2398f203848" className="x80de1b0e">입사신청을 위한 서약서 동의 <br /></div>
        <div data-layer="242b9484-ebf3-4e99-b4d6-a064817a123e" className="x38352b6a2">            
        <button onClick ={handleClick} data-layer="f649af37-2d5a-417d-aed4-d865458d2c82" className={state.button ? "buttonTrue":"buttonFalse"}> 동의</button>
      </div>



        <div data-layer="22a21d71-2123-48ef-bb99-e38999eb2a04" className="xcff63124">본인은 계절학기 생활관 입사신청을 하면서 면학분위기 조성과 건전한 생활관문화 조성을 위해 노력함은 물론, <br />아래에 기재된 생활관 준수사항을 지키며 위반 시에는 관련 처벌을 받을 것을 서약합니다.<br />- 아 래 -<br />* 내용을 충분히 읽고 난 후에 동의하시기 바랍니다.<br />○ 생활관 배정 안내문을 모두 이해하였으며 공지사항에 이의가 없음을 확인합니다.<br />○ 생활수칙의 내용을 숙지하고 반드시 준수한다.<br />○ 생활관 배정일 이후 배정받은 호실에서 퇴사자가 있을 경우 남게되는 학생은 학생 생활팀에서 지정하는 호실로 <br />이동하여야 함. <br />이 경우 이동할 학생이 동일 조건의 학생중에서 룸메이트를 선택할 수 있음.<br />○ 생활관 질서유지를 위한 생활관자치회 임원, 동장, 부동장 및 사감의 지도에 적극적으로 협조한다.<br />○ 기타 학생의 신분에 위배되거나 공동생활에 부적합한 행동을 하지 않는다.<br />○ 재배정 희망시 기존에 룸메와 같이 룸매를 맺지않고 각각 가상방을 만들고 신청할경우는 룸메를 분리한다.<br />(기존의 방을 각각 재배정신청하였다면 각각의 새로운 룸메를 맺어 추첨으로 호실을 배정하게 되므로 <br />재배정신청시 기존 룸메를 원하면 반드시 가상방개설과 참여를 함께 해야한다)<br /></div>
          
          <div className = "reasonCheck" onChange={e=>setApply({...apply, reason : e.target.value})}>
            <label data-layer="587a5770-0a0c-464a-aaee-44db66171a38" className="x0b70efc5"><input type = "checkbox" name ="check1" value ="카이스트 및 타대학 계절학기"/> 카이스트 및 타대학 계절학기 {apply.virtualRoomOpeningStatus} </label>
            <label data-layer="d673d11e-2948-4e4e-8158-981bd7392654" className="xd603be5a"><input type = "checkbox" name ="check1" value ="어학강좌"/>어학강좌</label>
            <label data-layer="3b1c9bee-c80d-47cb-b126-4e0d1d693003" className="xa7b52d74"><input type = "checkbox" name ="check1" value ="카이스트 신문사/방송국 추천"/>카이스트 신문사/ 방송국 추천</label>
            <label data-layer="4dc512a7-4e25-4ca0-9956-7b265dd5a76c" className="x2e4a81c9"><input type = "checkbox" name ="check1" value ="외국인, 국내 무연고자"/>외국인, 국내 무연고자</label>
            <label data-layer="629a785e-fa99-420e-8d9b-e87688fc45d5" className="x504239cd"><input type = "checkbox" name ="check1" value ="기초논술"/>기초논술</label>
            <label data-layer="e3c7b83b-8577-488e-aa5c-5e4ef7bea997" className="it"><input type = "checkbox" name ="check1" value ="IT강좌"/>IT강좌</label>
            <label data-layer="8a1b9098-c3b9-4cfa-9eea-1bc41183e206" className="x519f89f4"><input type = "checkbox" name ="check1" value ="학생지원팀 추천"/>학생지원팀 추천</label>
            <label data-layer="430a4c57-970a-4444-9e5d-f80a513d8fad" className="xc6de04a5"><input type = "checkbox" name ="check1" value ="글로벌 리더쉽센터 추천"/>글로벌 리더쉽센터 추천</label>
            <label data-layer="99007e3a-a5d9-4e6b-b6a2-6b3a2b956ca1" className="urp"><input type = "checkbox" name ="check1" value ="URP"/>URP</label>
            <label data-layer="398a38bb-465b-4529-9f10-f90837963fdb" className="x8f2be431"><input type = "checkbox" name ="check1" value ="방과 후 교사"/>방과 후 교사</label>
            <label data-layer="68fad274-f3ea-4c19-bfdc-9d4799f0ef9e" className="xfdc36ca1"><input type = "checkbox" name ="check1" value ="입학홍보팀 추천"/>입학홍보팀 추천</label>
            <label data-layer="5260bcb9-cff4-48d4-9598-127283429602" className="x55be5dce"><input type = "checkbox" name ="check1" value ="기타개인사유"/>기타/ 개인사유</label>
          </div>
        

        
        <div data-layer="ce6ffb7a-4db9-4253-8848-52b87361dc43" className="xbe0a4cb9">가상방 개설/참여</div>
          <div className="typeCheck" onChange={e=>setApply({...apply, virtualRoomOpeningStatus: e.target.value})}>
            <label data-layer="5e28e596-394b-46fd-8873-7a082e8757a5" className="x3a9ec23e"><input type = "checkbox" name ="check2" value ="found"/>가상방 개설</label>
            <label data-layer="15eab9ab-d015-4f70-adf3-17f03e74b7ad" className="x132519e2"><input type = "checkbox" name ="check2" value ="attend"/>가상방 참여</label>
          </div>


        <div className="process">

          <div data-layer="5fbf8d79-e5ef-4a66-b439-4a615e3f1824" className="xa442b32f">계절학기 신청</div>
          <svg data-layer="47c8e6d9-6fb5-469c-8460-92c26af122a6" preserveAspectRatio="none" viewBox="0 -1.5 170 3" className="x49"><path d="M 0 0 L 170 0"  /></svg>
          <div data-layer="401728d5-af18-4889-afbe-a0cb63caaa95" className="x61"></div>
          <div data-layer="8a67db40-46eb-41a5-9a5d-cabe99eed78a" className="x62"></div>
          <div data-layer="c0f7df30-0c21-411d-94db-1a21dc2721e5" className="x63"></div>
          <div data-layer="9bad12c4-c0c9-43a0-8097-c702b1bac62a" className="x64"></div>
          <svg data-layer="639e42b7-1f1f-4374-b892-81b7b40a55c6" preserveAspectRatio="none" viewBox="0 0 43 34" className="x1"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
          <svg data-layer="5e439fd7-005d-4d34-897f-530ecc737697" preserveAspectRatio="none" viewBox="0 0 43 34" className="x3"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
          <svg data-layer="14312602-4550-4daf-a9c2-4eaab13af678" preserveAspectRatio="none" viewBox="0 0 43 34" className="x4"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
        
        
          <div data-layer="f528d511-c510-4765-990e-c8c662242ae5" className="xa4ab82dd">개인정보 확인<br /><br />정보제공 동의</div>
          <div data-layer="73287eb9-7d14-4e52-ad36-8a0cdd8e9c9c" className="x758d56fa">신청 사유 작성 <br /><br />가상방 설정</div>
          <div data-layer="04ebf585-efaa-4ca3-aa3a-e13a084a8465" className="xbe5ba58b">가상방 개설/참여</div>
          <div data-layer="4ed08bfe-4104-4263-87e5-e0b8f0e48f8d" className="x6b8c7475">신청 완료</div>
        </div>

      
        <button data-layer="7b62ba74-1227-4e4b-9579-2e31774e8e22" className="xdd469231" onClick ={nextPage}>다음단계</button>
      

      </div>
  );
}

export default X19205;