// src/pages/Simulator.tsx
import React from 'react';
import BanPickPanel from '../components/BanPickPanel';
const Dashboard: React.FC = () => {
  return (
    <div>
<div className='flex justify-between items-center p-4 bg-blue-800 text-white flex-row'>
      <h3>Honor of Kings Ban/Pick Simulator</h3>
<img src='/github-mark-white.png' className='w-8 h-8 cursor-pointer' onClick={(e)=>window.open('https://github.com/qiqi47')}/>
</div>
	  <BanPickPanel/>
    </div>
  );
};

export default Dashboard;
