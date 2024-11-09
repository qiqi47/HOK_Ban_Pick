// src/pages/Simulator.tsx
import React from 'react';
import GameBanPickPanel from '../components/GameBanPickPanel';
import { useState} from 'react';
interface Phase {
  team: 'blue' | 'red';
  action: 'ban' | 'pick';
  text: string;
}
const Dashboard: React.FC = () => {
  const matchPhases: Phase[] = [
    { team: 'blue', action: 'ban', text: 'Blue Ban 1' },
    { team: 'red', action: 'ban', text: 'Red Ban 1' },
    { team: 'blue', action: 'ban', text: 'Blue Ban 2' },
    { team: 'red', action: 'ban', text: 'Red Ban 2' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 1' },
    { team: 'red', action: 'pick', text: 'Red Pick 1' },
    { team: 'red', action: 'pick', text: 'Red Pick 2' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 2' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 3' },
    { team: 'red', action: 'pick', text: 'Red Pick 3' },
    { team: 'red', action: 'ban', text: 'Red Ban 3' },
    { team: 'blue', action: 'ban', text: 'Blue Ban 3' },
    { team: 'red', action: 'ban', text: 'Red Ban 4' },
    { team: 'blue', action: 'ban', text: 'Blue Ban 4' },
    { team: 'red', action: 'pick', text: 'Red Pick 4' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 4' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 5' },
    { team: 'red', action: 'pick', text: 'Red Pick 5' },
  ];

  const normalPhases: Phase[] = [
    { team: 'blue', action: 'ban', text: 'Blue Ban 1' },
    { team: 'blue', action: 'ban', text: 'Blue Ban 2' },
    { team: 'red', action: 'ban', text: 'Red Ban 1' },
    { team: 'red', action: 'ban', text: 'Red Ban 2' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 1' },
    { team: 'red', action: 'pick', text: 'Red Pick 1' },
    { team: 'red', action: 'pick', text: 'Red Pick 2' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 2' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 3' },
    { team: 'red', action: 'pick', text: 'Red Pick 3' },
    { team: 'red', action: 'pick', text: 'Red Pick 4' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 4' },
    { team: 'blue', action: 'pick', text: 'Blue Pick 5' },
    { team: 'red', action: 'pick', text: 'Red Pick 5' },
  ];

  const [phases, setPhases] = useState<Phase[]>(normalPhases);
  const [key, setKey] = useState(0);
  const handlePhase = (newPhases: Phase[])=>{
    setPhases(newPhases);
    setKey(key+1);
  }


  return (
    <div>
      <div>
        <div className='flex justify-between items-center p-4 bg-blue-800 text-white flex-row'>
          <h3>Honor of Kings Ban/Pick Simulator</h3>
          <div className='gap-4 flex flex-row'>
            <button
              className={`cursor:pointer text-black ${phases.length === normalPhases.length ? 'underline' : ''}`}
              onClick={() => handlePhase(normalPhases)}
            >
				Normal/Ranking (2 bans)
            </button>
            <button
              className={`cursor:pointer text-black ${phases.length === matchPhases.length ? 'underline' : ''}`}
              onClick={() => handlePhase(matchPhases)}
            >
				Match (4 bans)
            </button>
          </div>
          <img src='/github-mark-white.png' className='w-8 h-8 cursor-pointer' onClick={()=>window.open('https://github.com/qiqi47/HOK_Ban_Pick')}/>
        </div>
      </div>
      <div key={key}>
	  <GameBanPickPanel phases={phases}/>
      </div>
    </div>
  );
};

export default Dashboard;
