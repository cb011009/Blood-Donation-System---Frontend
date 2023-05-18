import React from "react";
import "./Dashboards.css";
import Navigation from "./Navigation";
import  profilepic from "./images/common.png";

function Dashboards(props) {

  let choice = 'donor';
  let content = '';


  switch(choice){
    case 'donor':
      content = <div>
      <Navigation user="donor"/>
      <div className="maincontainer">
        <div className="dashboard">
          <h1 className="firstheading">WELCOME {props.name}!</h1>
          <h2 className="subheading">YOUR DASHBOARD</h2>
          <div className='iconImage'>
            <img src={profilepic} className='donorIcon' />
            </div>
        </div>
        <div className="dashboardinfo">
          <h3 className="finalheading">PERSONAL INFORMATION</h3>
          <ul>
          <div class="leftcolumn">
            <li className="list">
              NAME: <span>{props.name}</span>
            </li>
            <li className="list">
            DONOR NUMBER: {props.number}             
            </li>
            </div>
            <div class="rightcolumn">
            <li className="list">
            DATE OF BIRTH: {props.date}
            </li>
            <li className="list">
            BLOOD TYPE:{props.bloodType}
            </li>
            </div>
            <div class="middlecolumn1">
            <li className="list">
            ADDRESS: {props.address}    
            </li>
            </div>
            <div class="middlecolumn2">
            <li className="list">
            TELEPHONE: {props.telephone}        
            </li>
            </div>
          </ul>

        </div>

      </div>

</div>
  break;
  case 'admin':
    content=<div>
    <Navigation user="admin"/>
    <div className="maincontainer">
      <div className="dashboard">
        <h1 className="firstheading">WELCOME {props.name}!</h1>
        <h2 className="subheading">YOUR DASHBOARD</h2>
        <div className='iconImage'>
            <img src={profilepic}  className='adminIcon' />
            </div>
      </div>
      <div className="dashboardinfo">
        <h3 className="finalheading">PERSONAL INFORMATION</h3>
        <ul>
          <li className="list">
            NAME: {props.name}
          </li>
          <hr/>
          <div class="table">
          <li className="list">
            Number of pending hospital requests   {props.pendinghospital}
          </li>
          <li className="list">
          Number of pending blood bank requests   {props.pendingbloodbank}
          </li>
          <li className="list">
          Number of accepted hospital requests  {props.acceptedhospital}
          </li>
          <li className="list">
          Number of accepted blood bank requests  {props.acceptedbloodbank}
          </li>
          </div>
        </ul>
      </div>
    </div>
</div>
break;
case 'hospital':
  content=<div>
   <Navigation user="hospital"/>
  <div className="maincontainer">
    <div className="dashboard">
      <h1 className="firstheading">WELCOME {props.name}!</h1>
      <h2 className="subheading">YOUR DASHBOARD</h2>
      <div className='iconImage'>
            <img src={profilepic} className='hospitalIcon' />
            </div>
    </div>
    <div className="dashboardinfo">
      <h3 className="finalheading">PERSONAL INFORMATION</h3>
      <ul>
        <li className="list">
          NAME OF HOSPITAL: {props.name}
        </li>
        <li className="list">
         DISTRICT OF THE HOSPITAL: {props.district}
        </li>
        <li className="list">
          TELEPHONE NUMBER: {props.telephone}
        </li>
        <li className="list">
          ADDRESS: {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;
case 'bloodbank':
  content=<div>
         <Navigation user="bloodbank"/>
  <div className="maincontainer">
    <div className="dashboard">
      <h1 className="firstheading">WELCOME {props.name}!</h1>
      <h2 className="subheading">YOUR DASHBOARD</h2>
      <div className='iconImage'>
            <img src={profilepic} className='bloodBankIcon' />
            </div>
    </div>
    <div className="dashboardinfo">
      <h3 className="finalheading">PERSONAL INFORMATION</h3>
      <ul>
        <li className="list">
          NAME OF BLOOD BANK: {props.name}
        </li>
        <li className="list">
         DISTRICT OF BLOOD BANK:{props.district}
        </li>
        <li className="list">
          TELEPHONE:{props.telephone}
        </li>
        <li className="list">
          ADDRESS: {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;


  }
  return (
<div>
{content}
</div>
  );
}

export default Dashboards;

