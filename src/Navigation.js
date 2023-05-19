/*import React, { useState } from "react";
import "./Navigation.css";


function Navigation(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div>
      <button
        className={`sidebar-toggle ${isButtonClicked ? "active" : ""}`}
        onClick={toggleSideBar}
      >
        <i className={`fas ${isButtonClicked ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <div className={`sidebar ${isSideBarOpen ? "active" : ""}`}>
        {props.user === "donor" && (
          <ul className="sidebarnav">
            <h2 className="myac"> MY ACCOUNT </h2>
            <hr className="navhr"/>
            <li className="lists">
              <a href="/Dashboards" className="link">DONOR DASHBOARD </a>
            </li>
            <hr className="navhr"/>
            <li className="lists">
              <a href="/Donorhistory" className="link">DONATION HISTORY </a>
            </li>
            <hr className="navhr"/>
            <li className="lists">
              <a href="/Donorpoints" className="link">VIEW DONOR POINTS</a>
            </li >
            <hr className="navhr"/>
            <li className="lists">
              <a href="/FAQS" className="link">FAQS</a>
            </li>
            <hr className="navhr"/>
            <li className="lists">
              <a href="/Location1" className="link">FIND NEAREST LOCATION</a>
            </li>
            <hr className="navhr"/>
            <li className="lists">
              <a href="/SignUp" className="link">LOGOUT</a>
            </li>
            <hr className="navhr"/>
          </ul>
        )}

        {props.user === "admin" && (
          <ul className="sidebarnav">
            <li className="lists">
            <a href="/Dashboards" className="link">ADMIN DASHBOARD</a>
            </li>
            <li className="lists">
            <a href="/Pendingrequests" className="link">PENDING REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
            </li >
            <li className="lists">
            <a href="/Acceptedrequests" className="link">ACCEPTED REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
            </li>
            <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "hospital" && (
          <ul className="sidebarnav">
            <li className="lists">
            <a href="/Dashboards" className="link">HOSPITAL DASHBOARD</a>
            </li>
            <li className="lists">
            <a href="/HospitalChart" className="link">BLOOD COUNT</a>
            </li>
            <li className="lists">
            <a href="/BloodBankSearch" className="link">BLOOD BANK SEARCH</a>
            </li>
            <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "bloodbank" && (
          <ul className="sidebarnav">
            <li className="lists">
              <a href="/Dashboards" className="link">DASHBOARD</a>
            </li>
            <li className="lists">
              <a href="/BloodBankChart" className="link">BLOOD CHART</a>
            </li>
            <li className="lists">
              <a href="/Donorsearch" className="link">DONOR BASE</a>
            </li>
            <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

*/
import profilepic from "./images/common.png";
import React, { useState } from "react";
import "./Navigation.css";

const UserTypes = {
  DONOR: "donor",
  ADMIN: "admin",
  HOSPITAL: "hospital",
  BLOODBANK: "bloodbank",
};

function Navigation(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
    setIsButtonClicked(!isButtonClicked);
  };

  const renderNavigationLinks = () => {
    if (props.user === UserTypes.DONOR) {
      return (
        <ul className="sidebarnav">
          <h2 className="myac"> MY ACCOUNT </h2>
          <img src={profilepic} className='donorIcon' />
          <hr className="navhr"/>
          <li className="lists">
            <a href="/Dashboards" 
             DONOR DASHBOARD className="link">
              <i className="fas fa-chart-bar"></i> 
              Donor Dashboard 
            </a>
          </li>
          <hr className="navhr"/>
          <li className="lists">
            <a href="/Donorhistory" className="link">
            <i className="fas fa-history"></i>Donation History </a>
          </li>
          <hr className="navhr"/>
          <li className="lists">
            <a href="/Donorpoints" className="link">
            <i className="fas fa-coins"></i>
              View Donor Points</a>
          </li >
          <hr className="navhr"/>
          <li className="lists">
            <a href="/FAQS" className="link">
            <i className="fas fa-question"></i>
              FAQS</a>
          </li>
          <hr className="navhr"/>
          <li className="lists">
            <a href="/Location1" className="link">
            <i className="fas fa-map-marker-alt"></i> 
              Find Nearest Location</a>
          </li>
          <hr className="navhr"/>
          <li className="lists">
            <a href="/SignUp" className="link">
            <i className="fas fa-sign-out-alt"></i>
              Logout</a>
          </li>
          <hr className="navhr"/>
        </ul>
      );
    }

    if (props.user === UserTypes.ADMIN) {
      return (
        <ul className="sidebarnav">
          <li className="lists">
            <a href="/Dashboards" className="link">ADMIN DASHBOARD</a>
          </li>
          <li className="lists">
            <a href="/Pendingrequests" className="link">PENDING REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
          </li >
          <li className="lists">
            <a href="/Acceptedrequests" className="link">ACCEPTED REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
          </li>
          <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
          </li>
        </ul>
      );
    }

    if (props.user === UserTypes.HOSPITAL) {
      return (
        <ul className="sidebarnav">
          <li className="lists">
            <a href="/Dashboards" className="link">HOSPITAL DASHBOARD</a>
          </li>
          <li className="lists">
            <a href="/HospitalChart" className="link">BLOOD COUNT</a>
          </li>
          <li className="lists">
            <a href="/BloodBankSearch" className="link">BLOOD BANK SEARCH</a>
          </li>
          <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
          </li>
        </ul>
      );
    }

    if (props.user === UserTypes.BLOODBANK) {
      return (
        <ul className="sidebarnav">
          <li className="lists">
            <a href="/Dashboards" className="link">DASHBOARD</a>
          </li>
          <li className="lists">
            <a href="/BloodBankChart" className="link">BLOOD CHART</a>
          </li>
          <li className="lists">
            <a href="/Donorsearch" className="link">DONOR BASE</a>
          </li>
          <li className="lists">
            <a href="/SignUp" className="link">LOGOUT</a>
          </li>
        </ul>
      );
    }
  };

  return (
    <div>
      <button
        className={`sidebar-toggle ${isButtonClicked ? "active" : ""}`}
        onClick={toggleSideBar}
      >
        <i className={`fas ${isButtonClicked ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <div className={`sidebar ${isSideBarOpen ? "active" : ""}`}>
        {renderNavigationLinks()}
      </div>
    </div>
  );
}

export default Navigation;

