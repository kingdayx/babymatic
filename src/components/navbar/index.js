import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegramPlane,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { InjectedConnector } from "@web3-react/injected-connector";


export default function Nav() {
  const injected = new InjectedConnector({
    supportedChainIds: [56],
  })
  const providerOptions = {
    injected: {
      display: {
        name: "MetaMask"
      },
      package: injected,
      options: {
        infuraId: "26ed940d0cd04a1db352b58eb22e1e88" // required
      }
    }
  };
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
  
  
  const handleConnect = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
  }
  
  return (
    <div className="navbar">
      <div className="logoHead">
        <img
          src="./images/logo.webp"
          alt="logo"
          style={{ width: 35, height: 35 }}
        />
        <h1 className="logo">BabyMatic | </h1>
        <h2 className="logo">Dashboard</h2>
      </div>
      <div className="nav">
        <div className="nav1">
          <div className="price">
            <img
              src="./images/logo.webp"
              alt="logo"
              style={{ width: 25, height: 25, marginRight: 10 }}
            />
            $ 0.0000000001
          </div>
          <div className="icons">
            <FontAwesomeIcon
              className="telegram1"
              size="0.5x"
              icon={faTwitter}
            />
            <FontAwesomeIcon className="telegram1" icon={faInstagram} />
            <FontAwesomeIcon
              className="telegram1"
              size="1x"
              icon={faTelegramPlane}
            />
            <FontAwesomeIcon
              className="telegram1"
              size="1x"
              icon={faEnvelope}
            />
          </div>
        </div>
        <div className="wallet" onClick={handleConnect} >
          <h3>CONNECT</h3>
        </div>
      </div>
    </div>
  );
}
