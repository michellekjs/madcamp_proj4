import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow,MDBContainer } from 'mdbreact';
import "./dorms.css";
import Image from 'react-image-resizer';
import {Tabs,Tab,Col,Row,Nav,NavItem} from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import Swiper from 'react-id-swiper';
import "react-image-gallery/styles/css/image-gallery.css";

import { Paper } from '@material-ui/core';
import Gallery from "react-photo-gallery";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import ImageGallery from 'react-image-gallery';
import logo from './assets/nadeul/kaist_dorm2.png';
import i1 from './assets/nadeul/nadl01.jpg';
import i2 from './assets/nadeul/nadl02.jpg';
import i3 from './assets/nadeul/nadl03.jpg';
import i4 from './assets/nadeul/nadl04.jpg';
import i5 from './assets/nadeul/nadl05.jpg';
import i6 from './assets/nadeul/nadl06.jpg';
import s1 from './assets/sarang/sarang1.png';
import a1 from './assets/areum/areum1.png';
import tp1 from './assets/tp/tp1.jpg';
import ek1 from './assets/ek/ek1.jpg';
import alfm1 from './assets/alfm/alfm1.jpg';
import wls1 from './assets/wls/wls1.jpg';
import tjd1 from './assets/tjd/tjd1.jpg'

const imgdata=[
{original:logo,thumbnail:logo}
, {original:i1,thumbnail:i1}
, {original:i2,thumbnail:i2}
, {original:i3,thumbnail:i3}
, {original:i4,thumbnail:i4}
, {original:i5,thumbnail:i5}
, {original:i6,thumbnail:i6}
];

 
const mirnar=[
    {original:logo,thumbnail:logo}
, {original:i1,thumbnail:i1}
, {original:i2,thumbnail:i2}
, {original:i3,thumbnail:i3}
, {original:i4,thumbnail:i4}
, {original:i5,thumbnail:i5}
, {original:i6,thumbnail:i6}
];

class Dorm extends React.Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false,
          modal: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
     
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }


      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    render(){
        return (
            <div className="dorm">
                <div>
               
                <Tabs  indicatorColor="primary"
    textColor="primary"
     defaultActiveKey="male" className="dormtab">
                    <Tab style={{textColor:'green'}} eventKey="male" title="남학생 기숙사" >
                        <div className="tab-item-wrapper">
                            <MDBContainer className="male">
                                <MDBRow>
                                    <MDBCol>
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px' }} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={s1} 
                                                 />
                                                <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>사랑관</MDBCardTitle>
                                                    <MDBCardText><br/>N14<br/>Sarang Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>사랑관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :408명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    <MDBCol >
                                       <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px',height:'450px' }} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={tjd1}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>성실관</MDBCardTitle>
                                                <MDBCardText><br/>N17<br/>Seongsil Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>성실관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :274명<br/><br/>
                                                        호실유형 :2인실(싱글침대 2)<br/><br/>
                                                        호실면적 :4.9평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    <MDBCol >
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px'}} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={s1}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>소망관</MDBCardTitle>
                                                <MDBCardText><br/>N16<br/>Somang Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide  style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>소망관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :274명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :4.9평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    
                                    <MDBCol >
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px'}} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={wls1}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>진리관</MDBCardTitle>
                                                <MDBCardText><br/>N18<br/>Jilli Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' }} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>진리관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :274명<br/><br/>
                                                        호실유형 :2인실(싱글침대 2)<br/><br/>
                                                        호실면적 :4.9평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px' }} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={logo}
                                                 />
                                                <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>신뢰관</MDBCardTitle>
                                                    <MDBCardText><br/>N20<br/>Silloe Hall</MDBCardText>

                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardImage className="img-fluid" 
                                                    waves />
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>신뢰관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :408명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    <MDBCol >
                                       <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px',height:'450px' }} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={i1}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>지혜관</MDBCardTitle>
                                                <MDBCardText><br/>N21<br/>Jihye Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>지혜관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :272명<br/><br/>
                                                        호실유형 :2인실(싱글침대 2)<br/><br/>
                                                        호실면적 :4.9평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    <MDBCol >
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px'}} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={logo}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>나들관</MDBCardTitle>
                                                <MDBCardText><br/>W4-2<br/>Nadl Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide  style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>나들관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :350명<br/><br/>
                                                        호실유형 :2인실(싱글침대 2)<br/><br/>
                                                        호실면적 :5.2평<br/><br/>
                                                        편의시설 :종합 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    
                                    <MDBCol >
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px'}} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={alfm1}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>미르관</MDBCardTitle>
                                                <MDBCardText><br/>W6<br/>Mir Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' }} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>미르관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :352명<br/><br/>
                                                        호실유형 :원룸 1인실,2인실<br/><br/>
                                                        호실면적 :6.7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                </MDBRow>
                                
                               
                            </MDBContainer>
                        </div>
                    </Tab>

                    <Tab eventKey="female" title="여학생 기숙사">
                    <div className="tab-item-wrapper">
                    <MDBContainer className="male">
                                <MDBRow>
                                    <MDBCol>
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px' }} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={a1}
                                                 />
                                                <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>아름관</MDBCardTitle>
                                                    <MDBCardText><br/>N14<br/>Areum Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>아름관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :408명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 <br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                
                                    <MDBCol >
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px'}} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={tp1}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>세종관</MDBCardTitle>
                                                <MDBCardText><br/>N16<br/>Sejong Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide  style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>세종관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :408명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 여학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    
                                    <MDBCol >
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px'}} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={alfm1}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>나래관</MDBCardTitle>
                                                <MDBCardText><br/>N18<br/>Narae Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' }} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>나래관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :408명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 여학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                
                                
                                    <MDBCol>
                                    <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px' ,height:'450px' }} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={ek1}
                                                 />
                                                <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>다솜관</MDBCardTitle>
                                                    <MDBCardText><br/>N20<br/>Dasom Hall</MDBCardText>

                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>

                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>다솜관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :408명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                    <MDBCol >
                                       <Flippy
                                        flipOnHover={false} // default false
                                        flipOnClick={true} // default false
                                        flipDirection="horizontal" // horizontal or vertical
                                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                        // if you pass isFlipped prop component will be controlled component.
                                        // and other props, which will go to div
                                        /// these are optional style, it is not necessary
                                    >
                                        
                                        <FrontSide style={{ width: '255px',height:'450px' }} >
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                <MDBCardImage className="img-fluid" src={logo}
                                                waves />
                                                <MDBCardBody>
                                                <MDBCardTitle style={{fontWeight:'bold'}}>여울관</MDBCardTitle>
                                                <MDBCardText><br/>N21<br/>Yeowool Hall</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </FrontSide>
                                        <BackSide   style={{ width: '255px' ,height:'450px'}} className="cardback">
                                            <MDBCard style={{ width: '220px' ,height:'410px' }}>
                                                    <MDBCardBody>
                                                    <MDBCardTitle style={{fontWeight:'bold'}}>여울관</MDBCardTitle>
                                                    <MDBCardText style={{fontSize:'10pt'}}>
                                                       <br/><br/> 수용인원 :408명<br/><br/>
                                                        호실유형 :3인실(싱글침대 1, 2층침대 1)<br/><br/>
                                                        호실면적 :7평<br/><br/>
                                                        편의시설 :각층 휴게실, 세탁실<br/><br/>
                                                        입사대상 :학사과정 남학생<br/><br/>
                                                        호실비품 :책상, 침대, 옷장, 의자(매트리스size:970*2000*220)<br/><br/>
                                                    </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </BackSide>
                                    </Flippy>
                                        
                                    </MDBCol>
                                   
                                </MDBRow>
                                
                               
                            </MDBContainer>
                        </div>
                    </Tab>

                    <Tab eventKey="gallery" title="기숙사 이미지">

                        <Tabs inkBarStyle={{backgroundColor:"#FFC107", color:'rgba(255, 255, 255, 0)'}} variant="pills" defaultActiveKey="gallery1" className="dormtab2">
                            <Tab eventKey="gallery1" title="나들관 여울관">
                                <ImageGallery items={imgdata}/>
                            </Tab>
                            <Tab eventKey="gallery2" title="미르관 나래관">
                                <ImageGallery items={imgdata} />;
                            </Tab>
                            <Tab eventKey="gallery3" title="소망관"></Tab>

                            <Tab eventKey="gallery4" title="아름관"></Tab>
                            <Tab eventKey="gallery5" title="사랑관"></Tab>
                            <Tab eventKey="gallery6" title="성실관"></Tab>
                            <Tab eventKey="gallery7" title="신뢰관"></Tab>
                            <Tab eventKey="gallery8" title="지혜관"></Tab>
                            <Tab eventKey="gallery9" title="세종관"></Tab>
                            <Tab eventKey="gallery10" title="진리관"></Tab>
                        </Tabs>



                    </Tab>
                </Tabs>
                </div>

                
            </div>
        )
    }
}

export default Dorm;