import React, {useEffect, useState, useContext} from "react";
import "./mypage.css";
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useHistory } from "react-router-dom";
import { Next } from "react-bootstrap/esm/PageItem";
import { map } from "jquery";

function X192023(){

  //history 사용
  const history = useHistory();

  //유저 토큰
  const { token } = useContext(UserContext);

  //기숙사 데이터
  const [domitoryInfo, setDomitoryInfo] = useState(
    {
      name : "",
      studentid : "",
      userid : "",
      department : "",
      degree : "",
      email : "",
      phone : "",
      current_residence : "",
      bank : "",
      bank_account_name : "",
      bank_account_number : "",
      
    }
  );

  //가상방 데이터
  const [virtualRoomInfo, setVirtualRoomInfo] = useState(
    {
      founded_studentid : "",
      hope_domitory : "",
      hope_numofpeople : "",
      cost : "",
      password : "",
      room_mates : [{studentid: "0"}, {studentid: "0"},{studentid:""}],
      
    }
  );

  function getRoomMates(){

 
    return virtualRoomInfo.room_mates.map((mate) => {
      return <div>{mate.studentid}</div>
    });
  
  }

  useEffect (()=> {


    console.log("_________");
    console.log(token);
    console.log("---------")

    //getVirtualRoomInfo();

    const requestOne = axios.get("http://192.249.18.234:5000/mongooseDB/virtualRoom/info", {headers: {token : token}});
    const requestTwo = axios.get("http://192.249.18.234:5000/mongooseDB/userDomitory/info", {headers: {token : token}});

    axios.all([requestOne, requestTwo])
        .then(axios.spread((...responses) => {

          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;

          console.log(responseOne);
          console.log(responseTwo);

          setVirtualRoomInfo({
            founded_studentid : responseOne.founded_studentid,
            hope_domitory : responseOne.hope_domitory,
            hope_numofpeople : responseOne.hope_numofpeople,
            cost : responseOne.cost,
            password : responseOne.password,
            room_mates : responseOne.room_mates,
          });

          setDomitoryInfo({
            name : responseTwo.name,
            studentid : responseTwo.studentid,
            userid : responseTwo.userid,
            department : responseTwo.department,
            degree : responseTwo.degree,
            email : responseTwo.email,
            phone : responseTwo.phone,
            current_residence : responseTwo.current_residence,
            bank : responseTwo.bank,
            bank_account_name : responseTwo.bank_account_name,
            bank_account_number : responseTwo.bank_account_number
          });
      

      // use/access the results 
    })).catch(errors => {
      // react on errors.
      window.scrollTo(0, 0);
            //history.push('/');
            //alert('로그인을 다시 해주세요.');
    },)
  },[]);

    return (

        <div data-layer="7483d6b3-b98d-4c91-b4ac-483ba0c55679" className="x192023">        
        <div data-layer="7ead7d42-3357-49ee-8b0f-dcee008aadc1" className="x85"></div>
        <div data-layer="be878429-4986-4788-91e4-356e534bd973" className="myPage">My Page</div>
        <div data-layer="5022b003-2385-4d95-bb96-88c25a7b3911" className="x14fe95c3">이름 </div>
        <div data-layer="f6bca558-c5a1-4d71-b343-b8712627d387" className="x6edcc82c">연락처</div>
        <div data-layer="f5918213-ddba-4aeb-a0a3-be08453d08bd" className="x">가상계좌 정보</div>
        <div data-layer="42458347-0662-4b7f-ac9a-7f5b4525a5dd" className="x4446b0e8">환불계좌 정보</div>
        <div data-layer="26c6ab32-cc0f-4b1d-8e1b-23d1aae40754" className="xa5d9f4dd">학번</div>
        <div data-layer="e432d3ef-e7b0-4a02-8590-3e9ce0366712" className="xf192c9b2">이메일</div>
        <div data-layer="0517f56c-f999-4696-83ca-dd7e9180791c" className="xaa9f07c1">학과</div>
        <div data-layer="97e9e9ef-6ff1-45c0-bbca-550c5d52da18" className="xa13ec22c">벌점</div>
        <div data-layer="05426309-e017-4851-a36f-03412e6f38e9" className="x9374b447">{domitoryInfo.name}</div>
        <div data-layer="122f5689-3fa2-41e2-8ce9-01165e94285d" className="x20180517">{domitoryInfo.studentid}</div>
        <div data-layer="83ae4352-f1df-4b8c-acbd-395e7e7577ca" className="x6cd46b2d">{domitoryInfo.department}</div>
        <div data-layer="708d96dc-a5e8-48c6-a563-2e2878f148b2" className="michellekjs">{domitoryInfo.email}</div>
        <div data-layer="f10d0b36-55dc-437d-9d54-8586034096b7" className="x01064211838">{domitoryInfo.phone}</div>
        <div data-layer="60f03368-54f0-4128-a0bd-411f257cd7e1" className="x0">0</div>
        <div data-layer="e762079a-93dd-4593-a888-ba02e65148b6" className="x6aa687e4">한국과학기술원 </div>
        <div data-layer="d53dbb95-cf34-4da2-914b-5735ea9677e4" className="x3c29ec44">{domitoryInfo.bank_account_name}</div>
        <div data-layer="f1912a35-5c63-48a8-944c-a255c73579e5" className="x27411151118885">우리은행 27411151118885</div>
        <div data-layer="06733756-963c-4ae3-9f2f-8e19b16bf9fe" className="x067210913284">{domitoryInfo.bank} {domitoryInfo.bank_account_number}</div>
        <div data-layer="b3f68144-5070-4087-a126-486e3b9cbfa8" className="xa800fbf8">계좌 정보</div>
        <div data-layer="15ef1384-c8a6-4ea1-b253-2491256e1fa1" className="x75c05dc2">개인정보</div>
        <svg data-layer="856d6299-673e-4eda-93c4-d6540e44ef28" preserveAspectRatio="none" viewBox="0 -0.5 493 1" className="x7"><path d="M 0 0 L 493 0"  /></svg>
        <svg data-layer="17177434-c8cb-4cac-8deb-d6a9dd067ed0" preserveAspectRatio="none" viewBox="-0.75 -0.75 511.8857421875 1.5" className="x2"><path d="M 0 0 L 510.3857421875 0"  /></svg>
        <div data-layer="91b13fdf-f73b-4a42-ac60-1790f84f044c" className="x15"></div>
        <div data-layer="752ae681-a3e5-4a88-923f-480fbd96ac71" className="edit294d6ac3">EDIT</div>
        <div data-layer="53c4cfd4-5c46-4674-93fd-5d1846ef5e71" className="x16"></div>
        <div data-layer="a22ad671-a8cf-4374-bcf4-91b66e4fd30d" className="edit">EDIT</div>
        <div data-layer="b7ac26bb-5dd5-433e-8f5b-b8aa7115aaf8" className="xb19213a5">개인정보수정</div>
        <svg data-layer="aee0beba-47e6-4e76-8baf-3dfe135c8402" preserveAspectRatio="none" viewBox="0 -1.5 117 3" className="x49"><path d="M 0 0 L 117 0"  /></svg>


        <div data-layer="90c01b2c-aa19-4ea4-9541-48039271fc4c" className="xd387a147">기숙사 신청 현황</div>
        <div data-layer="f30cdc50-fa79-48e7-9d67-3a871e112761" className="x449d7b28">개설자(학번)</div>
        <div data-layer="c9e62e1d-5826-442a-af02-fc27c7668d12" className="xe39b2b83">희망 생활관</div>
        <div data-layer="2309b9f3-4d3d-448c-9ffe-21d6e8f461dd" className="xc6f23b4d">희망 인원 수</div>
        <div data-layer="330e0049-5259-4b29-9cf6-72971db3fbb4" className="x4010b537">{virtualRoomInfo.founded_studentid}</div>
        <div data-layer="8eaa8356-2ab1-4197-a7ec-33af2a9c3246" className="x20180517b8aa2a3e">{virtualRoomInfo.hope_domitory}</div>
        <div data-layer="0ea5225f-fe15-4865-bc4b-3571e006c11c" className="x39913b55">{virtualRoomInfo.hope_numofpeople} 명</div>
        <div data-layer="f800b24b-29e8-4190-8973-da99c65def73" className="xb5dceeb9">룸메이트</div>
        <div data-layer="f79786e3-3c44-4d3b-910b-6b64015700ca" className="xeb5ff37a" style={{float:'left'}}>{getRoomMates()}</div>
        <div data-layer="d19bffc1-920c-4465-bd90-49179ee40821" className="x002981e4">납부 금액</div>
        <div data-layer="4d0eade8-48e3-43dd-a45c-9e0a406a6db0" className="x0a7cdf15">{virtualRoomInfo.cost}</div>
        <svg data-layer="617593e1-224e-4149-ad64-76e70eae9590" preserveAspectRatio="none" viewBox="0 -0.5 1119 1" className="x60"><path d="M 0 0 L 1119 0"  /></svg>
</div>

    );
}



export default X192023;
          