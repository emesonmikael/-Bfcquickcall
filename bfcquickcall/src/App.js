
// App.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
import NetworkSelector from './NetworkSelector';

const App = () => {
  const [network, setNetwork] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask is not installed');
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [network],
      });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  return (
    <div>
      <h1>Conectar à Rede</h1>
      <NetworkSelector setNetwork={setNetwork} />
      <button onClick={connectWallet}>Conectar Carteira</button>
    </div>
  );
};

export default App;
