import React from 'react';
import './Location2.css';


function Location2(props) {

  
    return (
      <div>
      <div className="stepindicators">
    <div className="steps">
      <div className="stepnumber01">1</div>
      <div className="steptext01">Step 1</div>
    </div>
    <div className="stepline"></div>
    <div className="steps">
      <div className="stepnumber02">2</div>
      <div className="steptext02">Step 2</div>
    </div>
  </div>
  
     
        <h1 className="heading01">THE LOCATION YOU HAVE SELECTED IS </h1><p className="districtprops">{props.disrtict} </p>
        <br/>
        <h3 className="heading02">THESE ARE THE BLOOD BANKS AVAILABLE: </h3>

          <a href="/location1">
          <button className="backbutton">BACK</button>
          </a>
        </div>

     
    );
  }
  export default Location2;
