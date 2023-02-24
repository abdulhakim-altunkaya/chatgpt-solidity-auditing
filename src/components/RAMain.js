import React from 'react';
import RAConnectMet from "./RAConnectMet.js";
import RABalances from "./RABalances.js";
import {useAccount} from "../Store";

function RAMain() {
  const zustandData = useAccount( state => state.number);
  const zustandContract = useAccount( state => state.contract);


  const loadContract = async () => {
    const txResponse = await zustandContract.getCAddress();
    console.log(txResponse);
  }

  return (
    <div className='ReadAreaMain'>
        <RAConnectMet />
        <p>{zustandData}</p>
        <button onClick={loadContract}>adfwewefwefwefweffwef</button>
        <p>Token Supply:  </p>
        <RABalances />
    </div>
  )
}

export default RAMain