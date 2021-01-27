import PropTypes from "prop-types";
import "./19201.css";
import React, { Component } from 'react';
import dormday from "./assets/dormday.jpg"
import dormnight from "./assets/dormnight.jpg"
import dormt from "./assets/dormt.jpg"
import Image from 'react-image-resizer';
import dormimage from "./assets/dorm_illust.png"
import campusmap from "./assets/campus_map.png"
import {Link} from 'react-router-dom'

export default class X19201 extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  
  render() {
    
    return (
        
        <div data-layer="868ff236-9f0e-47ef-9d94-3b8a8768834f" className="x19201">  
        <img className="photo" src={campusmap}/>
       
        <div data-layer="b7c15d98-0b5d-45a1-bfc9-64e7f9c3d7c7" className="x3001"></div>
        <text style={{fontSize:'25pt', fontWeight:'bold'}} className="textkds"> Kaist Dormitory System<br/>카이스트 기숙사<br/><br/><br/><br/></text>
        
        <Link to='./apply' >
            <button className="applylink">생활관 신청 바로가기</button>
        </Link>

        <Link to='./dorm' >
            <button className="applylink2">생활관 정보 보기</button>
        </Link>

        <div data-layer="268615cd-9d5b-452b-9093-b08793650b9b" className="x38"></div>
        <div data-layer="b7c15d98-0b5d-45a1-bfc9-64e7f9c3d7c7" className="x39"></div>
        <div data-layer="b7c15d98-0b5d-45a1-bfc9-64e7f9c3d7c7" className="x11111"></div>
        <div data-layer="519982cb-2491-40da-abe5-e525fc656d3c" className="notice">Notice</div>
        <div data-layer="7797b422-40e6-4fc1-8ddf-e43a8ad15cf4" className="x3b7dc6b7">수리유지보수</div>
        <div data-layer="2eebc45b-6074-4611-8a56-62773c14ef4c" className="x201928cd1368">2019 가을학기 기숙사 입사/퇴사 일정</div>
        
        <div data-layer="7027c3b9-0792-48ab-9af9-03ca71e14a12" className="x816Fri">8.16 (금 / Fri)</div>
        <div data-layer="bf9a03ab-e7f7-4879-a92c-b0c68cebbb81" className="xDeadlineToMoveOutForGraduatingStudentsnotIncludingStudentsWhoArePromotedToKaistGraduateSchool">졸업자 퇴사기한(본교 진학 예정자 제외)<br />Deadline to move out for graduating students<br />(Not including students who are promoted to KAIST graduate school)<br /></div>
        <div data-layer="537ed73a-a03b-4920-a44a-d6bd308b2e93" className="xMovingInPeriodFallSemesterFreshman">가을학기 입사(학사신입생)<br />Moving in Period (Fall semester freshman)</div>
        <div data-layer="cbe25e5c-6ffa-4f3d-bf0a-15f526a1f957" className="xDeadlineToMoveOutForNonReturnees">가을학기 미 입사자 퇴사기한<br />Deadline to move out for non-returnees</div>
        <div data-layer="8be2fca3-5e75-4148-b147-f596db4b8786" className="xMovingPeriodForRemainingStudentsWhoWillUseTheDormitory">봄/여름학기 잔류자 신규호실 이동<br />Moving Period for remaining students who will use the dormitory<br /></div>
        <div data-layer="ba9b6255-7d87-4f81-941b-45f1ce551f57" className="xMovingOutProcedureKdsMovingInProcedureKds20192019">퇴사 절차[Moving out Procedure]<br />개인물품 반출 및 청소실시 〉KDS (해당학기 선택) 〉 생활관 취소/퇴사 〉 기간만료퇴사 신청 〉 체크리스트 작성) 〉 <br />사감실 방문 〉사감님 최종승인 〉 퇴사완료<br /><br />입사절차[Moving in Procedure]<br />가. 기존 기숙사 사용 학생<br />      - 기존호실(퇴사) : KDS → 해당학기 선택(학부: 2019 여름학기 선택 / 대학원 : 2019 봄학기 선택) →생활관 취소/퇴사 <br />→ 기간만료퇴사 → 체크리스트 작성 → 사감실 방문<br />      - 이동호실(입사) : KDS → 2019학년도 가을학기 선택 → Check List(로그인버튼 옆) → 체크리스트 작성→ 사감실 방문확인<br />나. 대학원신입생 ,복학생, 복귀생 <br />       KDS → 2019학년도 가을학기 선택 → Check List(로그인버튼 옆) → 체크리스트 작성→ 사감실 방문확인<br /> </div>
        <div data-layer="1c07f585-28cd-4da6-a5c6-f173ebdbd5bc" className="x817Sat">8.17(토 / Sat)</div>
        <div data-layer="a8151ba3-af77-48a0-83fd-3c5b69c04db8" className="x818Sun820Tue">8.18 (일 / Sun) - 8.20 (화 / Tue)</div>
        <div data-layer="26286feb-1ee3-4391-8c75-bcd67e39bcce" className="x817Sat820Tue">8.17 (토 / Sat) - 8.20 (화 / Tue)</div>
        <div data-layer="aeb09516-bcae-4f2f-903d-40e3d3401d0d" className="x110">희망관 110호 도어락 배터리 부족</div>
        <div data-layer="349c1c9f-855a-4add-95d0-b7dad6d760a0" className="x321">희망관 321호 난방</div>
        <div data-layer="fbdeb2ae-7cc5-4a57-b117-89006ff042a1" className="x2301">희망관 2301호 전기 수리 요청</div>
        <div data-layer="2fe9cdfc-1e26-4b85-8742-91bf121feb98" className="x33">나눔관 3동 3층 난방 </div>
        <div data-layer="39fe9d0c-c407-4b3d-a663-e0bce02eb80b" className="x20196e768e15">2019학년도 겨울학기 학사과정 생활관 운영 안내(재학생만 해당)</div>
        <div data-layer="68e88e87-ff39-4234-92b5-d5a319c8329a" className="xPlannedPowerOutageNotice">정전 안내문 / Planned Power Outage Notice</div>
        <div data-layer="f90be782-0a51-41de-a1aa-076eeba3324f" className="x201945839e13">2019 가을학기 신입생 생활관 입사도우미 근로모집</div>
        <div data-layer="87b8af8f-d2b0-4e07-b723-7e7466c74c3f" className="x2019">2019학년도 봄학기/여름학기 생활관 퇴실 호실 점검 근로 모집</div>
        <div data-layer="4a7a5c61-6e73-4925-95d0-637116b70657" className="x1426">희망관 1426호 커튼</div>
        <div data-layer="87a7ef4e-4f27-477b-80c2-cc2dac40adfa" className="x9f43f2b9">생활관 호실이동 차량 지원 안내</div>
        <div data-layer="4d8e431a-74e8-4977-ac83-01798170e454" className="x4">            <div data-layer="6fdf8037-1090-4054-875a-bf02c0d24d37" className="x20477d57ad"></div>
            <div data-layer="b742e5e4-740b-427f-8d3c-ef39e926ac4f" className="ip">IP 주소<br />#8137</div>
</div>
        <div data-layer="c49bcae6-e649-4fee-8d48-fdf7b252a50a" className="x9">            <div data-layer="7b233da6-8630-4fd4-ac2a-8bc6ea67782b" className="x21ba3cea0d"></div>
            <div data-layer="1d7a16a5-067f-4058-a47d-e3dd0191e53c" className="x281a082f">서울캠 생활관<br />#1242</div>
</div>
        <div data-layer="3b147342-b045-4bc3-8bec-d40e58b8a573" className="x10">            <div data-layer="38ef6755-7d6c-47e4-adf0-adc83693c5e9" className="x213d8b129a"></div>
            <div data-layer="5ef7c567-e6a4-43d3-af0b-cb91545d3e9b" className="x425b2561">분실<br />#4250</div>
</div>
        <div data-layer="6684b612-08ea-4578-ae58-e99b786b7421" className="x6">            <div data-layer="bfedc30f-de84-4154-9fa3-f3115b9bfaac" className="x20d9b621ea"></div>
            <div data-layer="2c076c83-657d-451c-b3cf-c8aa7c85a5c6" className="x76d080f7">냉난방<br />#2396</div>
</div>
        <div data-layer="fcfe51df-af63-4e8e-80f7-ccf0dbbd3b31" className="x5">            <div data-layer="eab879a4-f62b-46c3-ac8c-0136f5736859" className="x20c792dd15"></div>
            <div data-layer="2076aa4c-15c9-4243-829b-0543933aac96" className="xed03f912">출입증<br />#8000</div>
</div>
        <div data-layer="218106ac-06fc-4862-a95f-403d142a964f" className="x8">            <div data-layer="f7cddb80-a267-4017-95f8-8a0c41c3e3f5" className="x206a3a06a1"></div>
            <div data-layer="4b5207ff-41fc-4378-b482-e1291a9a0d07" className="x47cf02a9">학과 안내전화<br />#2114</div>
</div>
        <div data-layer="a4d81a9a-8408-4b8f-8447-145c08d3d774" className="x11">            <div data-layer="99bb0e55-559c-497a-bece-c3a427efb5c9" className="x211326bd9b"></div>
            <div data-layer="53d71517-a8c0-42d0-a238-8139ce4e092b" className="xfad75735">건강관리실<br />#2175</div>
</div>
        <div data-layer="9819a26d-00ca-4e11-a5fb-ccb33cd95b45" className="x12">            <div data-layer="c790616a-7d6e-4695-8cfb-2be0057b5e8d" className="x21bdc48d7b"></div>
            <div data-layer="5732505e-9365-44fa-82ed-099a0e27b08d" className="x86ae8d59">세탁소<br />#4938</div>
</div>
        <div data-layer="8a2ea079-d4b4-489f-bd9c-a4c27bfadeae" className="x7">            <div data-layer="c0b061b9-00e0-4465-b824-b3ce5fa6d5b3" className="x20"></div>
            <div data-layer="b9e0fcf8-2b07-45bc-ab8f-a117c8673cab" className="xefa8a33c">전기<br />#3300</div>
</div>
        <div data-layer="200a008a-a1af-47e0-8e0f-27ec02f1b8df" className="x13">            <div data-layer="55022da7-a7de-4bdf-b92f-e53104b3c103" className="x21"></div>
            <div data-layer="499e442f-4744-47ae-b75e-cd1ba4deb4c3" className="x0423501341">대표전화<br />042-350-1341</div>
</div>
        <div data-layer="780d335b-7838-4477-b4dc-b017453acf0b" className="x04167a5b">연락망</div>
        <div data-layer="496b17dc-61b5-4b51-880d-bde8067754eb" className="add291DaehakRo3731GuseongDongYuseongGuDaejeon34141RepublicOfKoreatel82423504710">ADD. 291 Daehak-ro(373-1 Guseong-dong), Yuseong-gu, Daejeon 34141, Republic of Korea/Tel +82-42-350-4710 </div>
        <svg data-layer="d7d25bd0-dd62-44d2-a120-1720578445e2" preserveAspectRatio="none" viewBox="-1.5 0 3 22" className="x44"><path d="M 0 0 L 0 22"  /></svg>
        <svg data-layer="875e859d-9a7e-4240-aafe-ec6a84710e68" preserveAspectRatio="none" viewBox="-1.5 0 3 22" className="x45"><path d="M 0 0 L 0 22"  /></svg>
        <svg data-layer="c54fe298-d483-4235-bfa2-51eb44baa286" preserveAspectRatio="none" viewBox="0 -1 713.6142578125 2" className="x59"><path d="M 0 0 L 713.6142578125 0"  /></svg>

</div>
    );
  }
}
X19201.propTypes = {
}
X19201.defaultProps = {
}
