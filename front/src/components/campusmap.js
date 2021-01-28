import React from "react";
import PropTypes from "prop-types";
import "./campusmap.css";
import {Link} from "react-router-dom";
import map from "./assets/campus_map.png";
import circleb from "./assets/circleb.gif"
class CampusMap extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          visibility:'hidden',
          visibility2:'hidden',
          visibility3:'hidden',
          visibility4:'hidden',
          visibility5:'hidden',
          visibility6:'hidden',
          visibility7:'hidden',
          visibility8:'hidden',
          visibility9:'hidden',
          visibility10:'hidden',
          visibility11:'hidden',
          visibility12:'hidden',
          visibility13:'hidden'
      };
      this.handleClick=this.handleClick.bind(this);
      this.handleClick2=this.handleClick2.bind(this);
      this.handleClick3=this.handleClick3.bind(this);
      this.handleClick4=this.handleClick4.bind(this);
      this.handleClick5=this.handleClick5.bind(this);
      this.handleClick6=this.handleClick6.bind(this);
      this.handleClick7=this.handleClick7.bind(this);
      this.handleClick8=this.handleClick8.bind(this);
      this.handleClick9=this.handleClick9.bind(this);
      this.handleClick10=this.handleClick10.bind(this);
      this.handleClick11=this.handleClick11.bind(this);
      this.handleClick12=this.handleClick12.bind(this);
      this.handleClick13=this.handleClick13.bind(this);


  }

  handleClick(){
    this.setState({visibility:this.state.visibility=='visible' ? 'hidden' : 'visible'})
  }
  handleClick2(){
    this.setState({visibility2:this.state.visibility2=='visible' ? 'hidden' : 'visible'})
  }
  handleClick3(){
    this.setState({visibility3:this.state.visibility3=='visible' ? 'hidden' : 'visible'})
  }
  handleClick4(){
    this.setState({visibility4:this.state.visibility4=='visible' ? 'hidden' : 'visible'})
  }
  handleClick5(){
    this.setState({visibility5:this.state.visibility5=='visible' ? 'hidden' : 'visible'})
  }
  handleClick6(){
    this.setState({visibility6:this.state.visibility6=='visible' ? 'hidden' : 'visible'})
  }
  handleClick7(){
    this.setState({visibility7:this.state.visibility7=='visible' ? 'hidden' : 'visible'})
  }
  handleClick8(){
    this.setState({visibility8:this.state.visibility8=='visible' ? 'hidden' : 'visible'})
  }
  handleClick9(){
    this.setState({visibility9:this.state.visibility9=='visible' ? 'hidden' : 'visible'})
  }
  handleClick10(){
    this.setState({visibility10:this.state.visibility10=='visible' ? 'hidden' : 'visible'})
  }
  handleClick11(){
    this.setState({visibility11:this.state.visibility11=='visible' ? 'hidden' : 'visible'})
  }
  handleClick12(){
    this.setState({visibility12:this.state.visibility12=='visible' ? 'hidden' : 'visible'})
  }

  handleClick13(){
    this.setState({visibility13:this.state.visibility13=='visible' ? 'hidden' : 'visible'})
  }


  render() {
    return (
          <div data-layer="d6f7d13f-b581-474c-8251-eb69ac1dd758" className="campusmap">


            <img src={map} height="900px" className="map"/>

            <div className='circles'>
                <img  src={circleb} className="circle" style={{height:'130px', visibility:this.state.visibility ,opacity:0.7}} />
                <img  src={circleb} className="circle2" style={{height:'130px', visibility:this.state.visibility2,opacity:0.7}} />
                <img  src={circleb} className="circle3" style={{height:'130px', visibility:this.state.visibility3,opacity:0.7}} />
                <img  src={circleb} className="circle4" style={{height:'130px', visibility:this.state.visibility4,opacity:0.7}} />
                <img  src={circleb} className="circle5" style={{height:'130px', visibility:this.state.visibility5,opacity:0.7}} />
                <img  src={circleb} className="circle6" style={{height:'130px', visibility:this.state.visibility6,opacity:0.7}} />
                <img  src={circleb} className="circle7" style={{height:'130px', visibility:this.state.visibility7,opacity:0.7}} />
                <img  src={circleb} className="circle8" style={{height:'130px', visibility:this.state.visibility8,opacity:0.7}} />
                <img  src={circleb} className="circle9" style={{height:'130px', visibility:this.state.visibility9,opacity:0.7}} />
                <img  src={circleb} className="circle10" style={{height:'130px', visibility:this.state.visibility10,opacity:0.7}} />
                <img  src={circleb} className="circle11" style={{height:'130px', visibility:this.state.visibility11,opacity:0.7}} />
                <img  src={circleb} className="circle12" style={{height:'130px', visibility:this.state.visibility12,opacity:0.7}} />
                <img  src={circleb} className="circle13" style={{height:'130px', visibility:this.state.visibility13,opacity:0.7}} />
            </div>
            
            <div className="campustags">
                <text className="tagtext" style={{color:"#545454", fontWeight:"bold"}}> 남자기숙사<br/></text>
                <button className="btn" onClick={this.handleClick}> 사랑관</button> <br/>
                <button className="btn"  onClick={this.handleClick2}>소망관</button><br/>
                <button className="btn"  onClick={this.handleClick3}>성실관</button><br/>
                <button className="btn"  onClick={this.handleClick4}>지혜관</button><br/>
                <button className="btn" onClick={this.handleClick5}>나들관</button><br/>
                <button className="btn" onClick={this.handleClick6}>미르관</button><br/>
                <button className="btn" onClick={this.handleClick7}>진리관</button><br/>
                <button className="btn" onClick={this.handleClick8}>신뢰관</button><br/>
                <div style={{marginTop:"40px"}}>
                <text className="tagtext"  style={{color:"#545454", fontWeight:"bold"}}> 여자기숙사<br/></text>
                <button className="btn2" onClick={this.handleClick9}>다솜관</button><br/>
                <button className="btn2" onClick={this.handleClick10}>세종관</button><br/>
                <button className="btn2" onClick={this.handleClick11}>여울관</button><br/>
                <button className="btn2" onClick={this.handleClick12}>나래관</button><br/>
                <button className="btn2" onClick={this.handleClick13}>아름관</button><br/>
                </div>
                
            </div>
          </div> 
          
          
    );
  }
}
CampusMap.propTypes = {
}
CampusMap.defaultProps = {
}
export default CampusMap;
