
// NetworkSelector.js
import React, { useState } from 'react';
import { networks } from './networks';

const NetworkSelector = ({ setNetwork }) => {
  const [selectedNetwork, setSelectedNetwork] = useState('bsc');

  const handleChange = (event) => {
    const network = event.target.value;
    setSelectedNetwork(network);
    setNetwork(networks[network]);
  };

  return (
    <select value={selectedNetwork} onChange={handleChange}>
      <option value="bsc">Binance Smart Chain</option>
      <option value="polygon">Polygon</option>
    </select>
  );
};

export default NetworkSelector;
