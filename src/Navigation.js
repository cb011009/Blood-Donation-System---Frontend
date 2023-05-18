import React, { useState } from "react";
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
            <li>
              <a href="/Dashboards">DONOR DASHBOARD</a>
            </li>
            <li>
              <a href="/Donorhistory">DONATION HISTORY </a>
            </li>
            <li>
              <a href="/Donorpoints">VIEW DONOR POINTS</a>
            </li>
            <li>
              <a href="/FAQS">FAQS</a>
            </li>
            <li>
              <a href="/Location1">FIND NEAREST LOCATION</a>
            </li>
            <li>
              <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "admin" && (
          <ul className="sidebarnav">
            <li>
            <a href="/Dashboards">ADMIN DASHBOARD</a>
            </li>
            <li>
            <a href="/Pendingrequests">PENDING REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
            </li>
            <li>
            <a href="/Acceptedrequests">ACCEPTED REQUESTS</a>
            <li className="subnav">HOSPITAL</li>
            <li className="subnav">BLOOD BANK</li>
            </li>
            <li>
            <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "hospital" && (
          <ul className="sidebarnav">
            <li>
            <a href="/Dashboards">HOSPITAL DASHBOARD</a>
            </li>
            <li>
            <a href="/HospitalChart">BLOOD COUNT</a>
            </li>
            <li>
            <a href="/BloodBankSearch">BLOOD BANK SEARCH</a>
            </li>
            <li>
            <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}

        {props.user === "bloodbank" && (
          <ul className="sidebarnav">
            <li>
              <a href="/Dashboards">DASHBOARD</a>
            </li>
            <li>
              <a href="/BloodBankChart">BLOOD CHART</a>
            </li>
            <li>
              <a href="/Donorsearch">DONOR BASE</a>
            </li>
            <li>
            <a href="/SignUp">LOGOUT</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
