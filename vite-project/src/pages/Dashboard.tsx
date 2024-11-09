// src/pages/Simulator.tsx
import React from 'react';
import GameBanPickPanel from '../components/GameBanPickPanel';
import Header from '../components/Header';
const Dashboard: React.FC = () => {
  return (
    <div>
<Header/>
	  <GameBanPickPanel/>
    </div>
  );
};

export default Dashboard;
