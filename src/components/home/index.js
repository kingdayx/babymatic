import React, { Component } from "react";
import Nav from "../navbar";
import "./styles.css";

class Home extends Component {
  render() {
    return (
      <div className="dashboard">
        <Nav />
        <div>
          <h3 className="head"> your gateway to olympus</h3>
        </div>
        <div className="mainDiv">
          <div className="div1">
            <img
              src="./images/logo.webp"
              alt="logo"
              style={{ width: 70, height: 70 }}
            />
            <p className="info">Please connect wallet to view</p>
            <h3 className="hold"> total olympus holdings</h3>
          </div>

          <div className="div1">
            <img
              src="./images/bnb.svg"
              alt="logo"
              style={{ width: 70, height: 70 }}
            />
            <p className="info">Please connect wallet to view</p>
            <h3 className="hold"> total busd paid</h3>
          </div>
          <div className="div1">
            <img
              src="./images/logo1.svg"
              alt="logo"
              style={{ width: 70, height: 70 }}
            />
            <p className="info">Please connect wallet to view</p>
            <h3 className="hold"> PENDING BUSD REWARDS</h3>
          </div>
          <div className="div1">
            <img
              src="./images/logo2.svg"
              alt="logo"
              style={{ width: 70, height: 70 }}
            />
            <p className="info">Please connect wallet to view</p>
            <h3 className="hold"> CURRENT HADES SELL TAX</h3>
          </div>
        </div>
        <div className="buy">buy olympus</div>
      </div>
    );
  }
}

export default Home;
