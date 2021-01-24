import React from "react";
import PropTypes from "prop-types";
import "./apply.css";
import {Link} from "react-router-dom";
import {Component} from "react-router-dom";
class X19204 extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      checked:false,
      button:true
    };
    this.handleClick = this.handleClick.bind(this);
}
handleClick(){
  this.setState({button:!this.state.button})
}

handleCheckboxChange = event => this.setState({checked:event.target.checked})

  render() {
    return (
        <div data-layer="534f2b89-2a17-4b0e-9e91-8d320b06a3ad" className="x19204">        <div data-layer="68efac9b-c7a4-4e9b-86c6-542d04c9b85b" className="xa549c119">정규학기 신청</div>
        <svg data-layer="f9b9c7aa-78be-4932-966c-e3c100d98118" preserveAspectRatio="none" viewBox="0 -1.5 170 3" className="x49"><path d="M 0 0 L 170 0"  /></svg>
        <div data-layer="48ee46ef-6e31-4bda-bcd9-2bb0363a8899" className="x542db712">개인정보 확인</div>
        <div data-layer="a2d5e89e-b4a2-4fde-99c3-e0feb4083026" className="x76e78449">이름</div>
        <div data-layer="f2a4a613-8933-43fd-a11c-c9b1dcff3b6b" className="x7a52d709">학번</div>
        <div data-layer="90d9ce83-8bd3-4933-9196-e0ac8528b28b" className="x8d3bb3f0">학과</div>
        <div data-layer="a86263f7-6a98-4700-afc6-14ded45c00b8" className="x03d961c0">이채영</div>
        <div data-layer="d38cea66-5da2-4689-8dab-214e56671b98" className="x20180517">20180517</div>
        <div data-layer="bcb12c93-7787-45dd-9126-b28949a6c273" className="xe93a8765">전산학부</div>
        <div data-layer="c9241a50-6e33-4120-b659-8b78858392f6" className="id">ID</div>
        <div data-layer="62aaa701-d3f6-41d9-97f4-2a160e18787d" className="michellekjs4678bf2f">Michellekjs</div>
        <div data-layer="7f60b9a6-00a3-481e-add0-bc56678aeb46" className="x463dab50">환불계좌 정보 </div>
        <div data-layer="eb818735-72f7-49b6-9624-472ff5f4aebd" className="x50603d9a">계좌번호</div>
        <div data-layer="b6981c34-b467-497c-89b6-2def56069a48" className="xa9f6c7e2">예금주명</div>
        <div data-layer="139d9a4b-7a1d-4d40-9f4a-9d17170321c5" className="x4a4258da">국민은행</div>
        <div data-layer="1f5bf77b-677c-424f-a8f7-fa1c58cf7ad9" className="x067210913284">067210913284</div>
        <div data-layer="0c198a37-f498-4f6a-b10b-9dca6840d197" className="x48ee311e">김김김</div>
        

        <div data-layer="87b79473-8192-4413-a75f-7e08cd541623" className="x61"></div>
        <div data-layer="f5198729-9453-4431-9fe3-bf745a00087a" className="x62"></div>
        <div data-layer="ab04846f-1e8b-49ef-ae7e-71f582291228" className="x63"></div>
        <div data-layer="396cd633-c32c-4c1e-972c-f7976e4d5585" className="x64"></div>
        <div data-layer="5e393a0b-4681-4348-a7c0-9a91066dc297" className="x66"></div>
        <div data-layer="9db6fcc1-c530-453c-9671-1a3e98310c9a" className="x21d4ebdc">개인정보 수집/이용 동의</div>
        <div data-layer="f93641eb-4674-4a9f-bfe4-739131b4796c" className="x1aa688205">1. 개인정보의  수집/ 이용 목적 : 생활관 신청 및 배정관리</div>
        <div data-layer="da70c919-0493-4f3e-b0ad-37b482b88076" className="x2f0bea4a2">2. 수집하려는 개인정보의 항목: 학번, 학과 ,연락처, 이메일, 과정, 계좌번호</div>
        <div data-layer="572bae35-5170-4882-bf9d-157d2e08cfb8" className="x35">3. 개인정보의 보유 및 이용기간: 5년</div>
        <div data-layer="caca1ce2-746f-4300-8e22-27798622ed63" className="x4609c4c32">4. 동의를 거부할 수 있으며 동의를 거부할 시 생활관 신청 및 배정관리 서비스가 제공되지 않습니다. </div>
        <div data-layer="2a36ee1d-f66e-422c-beb2-bc53190965f7" className="x3284957ce">            
        
        <div>
           <button onClick ={this.handleClick} data-layer="32cbfa5b-7135-4821-b76e-25297205fced" className={this.state.button ? "buttonTrue":"buttonFalse"} > 동의 </button>
        </div>

      
</div>
        <svg data-layer="6760b783-f16e-4298-8582-e5eb96c96289" preserveAspectRatio="none" viewBox="0 0 43 34" className="x1"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
        <svg data-layer="21fe84ed-d43b-41ca-9392-d600a6f69697" preserveAspectRatio="none" viewBox="0 0 43 34" className="x3"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
        <svg data-layer="2b241eda-360e-415d-822e-e13cfe0d97aa" preserveAspectRatio="none" viewBox="0 0 43 34" className="x4"><path d="M 23.11572265625 24.08395385742188 L 0 24.08395385742188 L 0 12.04095458984375 L 23.11572265625 12.04095458984375 L 23.11572265625 0 L 43 16.99899291992188 L 23.11572265625 34 L 23.11572265625 24.08395385742188 Z"  /></svg>
        <div data-layer="77b4a7c6-e685-4b8e-ab50-08f05f3b193e" className="x9538c655">개인정보 확인<br /><br />정보제공 동의</div>
        <div data-layer="735ef5c4-e59e-495c-a4fe-185be7ac4902" className="xd84427e1">신청 사유 작성 <br /><br />가상방 설정</div>
        <div data-layer="a018eb5b-0ee6-41a8-8cc1-81f9d30f66dd" className="x79403d09">가상방 개설/참여</div>
        <div data-layer="6407fe8c-865f-461e-a2bc-c522bc603007" className="x9ded30b1">신청 완료</div>
        <div data-layer="bbd3a1ad-bc76-4844-b65d-50285b57a8ac" className="x33"></div>

        
        
        <Link to="./second">
          <button data-layer="c7b90b6f-a242-4adb-b852-ba067b1ae904" className="x">계절학기 신청하기</button>
        </Link>
        <div data-layer="a55913ae-7260-4f14-8678-3b6cf3050c0b" className="x7732fffa">과정</div>
        <div data-layer="fe4e9540-1231-4925-a4d1-94b228841ec4" className="x3b98586e">이메일</div>
        <div data-layer="5f78ddba-a3f8-48cd-b345-6bad73d24ff0" className="xef375f14">연락처</div>
        <div data-layer="2526bb46-226c-4c9e-a50e-86f952991273" className="xb1be40da">학사과정</div>
        <div data-layer="855b3d01-355b-462e-8c5d-e904710bde69" className="michellekjs">michellekjs@kaist.ac.kr</div>
        <div data-layer="e0d17e3a-5d90-4b9a-8dec-44eb19b0d4bc" className="x01064211838">010-6421-1838</div>
        <div data-layer="caff3e42-160c-4fb8-99fc-50d446cf3fe0" className="x0b4fb335">현거주지</div>
        <div data-layer="ad7749f4-0eca-411d-87ba-a5d322dc1f1e" className="xf5e7b16d">아름관</div>
</div>
    );
  }
}
X19204.propTypes = {
}
X19204.defaultProps = {
}
export default X19204;
