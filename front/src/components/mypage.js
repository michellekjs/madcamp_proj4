import React from "react";
import PropTypes from "prop-types";
import "./mypage.css";
import EdiText from 'react-editext';
class X192023 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  onSave = val => {
    console.log('Edited Value -> ', val)
  }




  render() {
    
    return (
          <div data-layer="7483d6b3-b98d-4c91-b4ac-483ba0c55679" className="x192023">        <div data-layer="9914c537-c87a-43fe-b5da-0942be50fa8e" className="x33"></div>
        <div data-layer="7ead7d42-3357-49ee-8b0f-dcee008aadc1" className="x85"></div>
        <div data-layer="be878429-4986-4788-91e4-356e534bd973" className="myPage">My Page</div>
        <div data-layer="5022b003-2385-4d95-bb96-88c25a7b3911" className="x747c5887">이름 </div>
        <div data-layer="f6bca558-c5a1-4d71-b343-b8712627d387" className="x83487807">연락처</div>
        <div data-layer="f5918213-ddba-4aeb-a0a3-be08453d08bd" className="x9199a9d4">가상계좌 정보</div>
        <div data-layer="42458347-0662-4b7f-ac9a-7f5b4525a5dd" className="x8f652c79">환불계좌 정보</div>
        <div data-layer="26c6ab32-cc0f-4b1d-8e1b-23d1aae40754" className="x9530360a">학번</div>
        <div data-layer="e432d3ef-e7b0-4a02-8590-3e9ce0366712" className="xb0c6b217">이메일</div>
        <div data-layer="0517f56c-f999-4696-83ca-dd7e9180791c" className="xe5df3dd3">학과</div>
        <div data-layer="97e9e9ef-6ff1-45c0-bbca-550c5d52da18" className="x944a008d">벌점</div>
        <div data-layer="05426309-e017-4851-a36f-03412e6f38e9" className="x8a698393">이채영</div>
        <div data-layer="122f5689-3fa2-41e2-8ce9-01165e94285d" className="x20180517">20180517</div>
        <div data-layer="83ae4352-f1df-4b8c-acbd-395e7e7577ca" className="x9bb386a8">전산학부</div>
        <div data-layer="708d96dc-a5e8-48c6-a563-2e2878f148b2" className="michellekjs">michellekjs@kaist.ac.kr</div>
        <div data-layer="f10d0b36-55dc-437d-9d54-8586034096b7" className="x01064211838">010-6421-1838</div>
        <div data-layer="60f03368-54f0-4128-a0bd-411f257cd7e1" className="x0">0</div>
        <div data-layer="e762079a-93dd-4593-a888-ba02e65148b6" className="xe9a79ab9">한국과학기술원 </div>


        <EdiText type='text' value="김김김" data-layer="d53dbb95-cf34-4da2-914b-5735ea9677e4" className="xfcbf48a8" onSave={this.onSave}/>


        <div data-layer="f1912a35-5c63-48a8-944c-a255c73579e5" className="x27411151118885">우리은행 27411151118885</div>
        <EdiText type='text' value= '국민은행 067210913284' data-layer="06733756-963c-4ae3-9f2f-8e19b16bf9fe" className="x067210913284"  onSave={this.onSave}/>
        <div data-layer="b3f68144-5070-4087-a126-486e3b9cbfa8" className="xbb687f98">계좌 정보</div>
        <div data-layer="15ef1384-c8a6-4ea1-b253-2491256e1fa1" className="xfd2e2e4a">개인정보</div>
        <svg data-layer="856d6299-673e-4eda-93c4-d6540e44ef28" preserveAspectRatio="none" viewBox="0 -0.5 493 1" className="x7"><path d="M 0 0 L 493 0"  /></svg>
        <svg data-layer="17177434-c8cb-4cac-8deb-d6a9dd067ed0" preserveAspectRatio="none" viewBox="-0.75 -0.75 511.8857421875 1.5" className="x2283d1c15"><path d="M 0 0 L 510.3857421875 0"  /></svg>
        <div data-layer="b7ac26bb-5dd5-433e-8f5b-b8aa7115aaf8" className="xfd2e5522">개인정보수정</div>

</div>
    );
  }
}
X192023.propTypes = {
}
X192023.defaultProps = {
}
export default X192023;
