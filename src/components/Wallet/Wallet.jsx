// import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ABI from "./ABI.json";
import Web3 from "web3";
import './Wallet.css';

const Wallet =({saveState})=>{
      const [connected, setConnected] = useState(true);
      const isAndroid = /android/i.test(navigator.userAgent);
      const init = async () => {
            try {      
                  const web3 = new Web3(window.ethereum); // to access metamask
                  await window.ethereum.request({ method: 'eth_requestAccounts' });
                  const contract = new web3.eth.Contract(
                        ABI,
                        "0x35f2C445a367E225a60bd7C9c5620F5b25e6244f"
                  );
                  setConnected(false); //if metamask is already connected then don't show the button
                  saveState({ web3: web3, contract: contract });
                  // console.log(contract);
            } catch (error) {
                  alert("Please Install Metamask");
            }
      }
      return<>
      <div className="header">
     {isAndroid && <button className="connectBTN" >
         <a href="https://metamask.app.link/dapp/rahulprasadp0rtf0li0.netlify.app/">Click For Mobile</a>
        </button> } 
       <button className="connectBTN" onClick={init} disabled={!connected}> {connected? "Connect Metamask":"Connected"}</button>
      </div>
      </>
}
Wallet.propTypes = {
      saveState: PropTypes.func.isRequired,
    };
export default Wallet;