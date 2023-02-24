import React from 'react';
import { useState } from 'react';

function RAConnectMet() {

  let[displayStatus2, setDisplayStatus2] = useState(false);

  const {ethereum} = window;

  let[account, setAccount] = useState("");
  const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      setDisplayStatus2(true);
    } else {
      alert("install Metamask on your browser");
    }
  }
  
  const hideDetails1 = () => {
    setDisplayStatus2(false);  
  }

  return (
    <div>
        <button className='button9' onClick={connectMetamask}>CONNECT METAMASK</button>
        {
          displayStatus2 === true ? 
            <>

            <div className='contractDetailsDiv'>
                  <span>Your Metamask Account:</span>  <br />{account} <br />
                  <span>Token Name:</span> Contractorium <br />
                  <span>Token Symbol:</span>  CONTOR <br />
                  <span>Token Cap: </span>  1000000 <br />
                  <span>Token Standard:</span>  ERC20 <br />
                  <span>Token Decimals:</span>  18 <br />
                  <span>Token Network:</span>  Fantom Testnet <br />
                  <span>Token Contract Account:</span>  0x25ff1Ba107cE37F289Fe421F18284e5841370fB6<br />  
            </div> <br />
            <span className='hidingButton' onClick={hideDetails1}>Hide Details</span>
            </>
          :
          <></>
        }

    </div>
  )
}

export default RAConnectMet