import { useState,useEffect } from "react";
interface Phase {
  team: 'blue' | 'red';
  action: 'ban' | 'pick';
  text: string;
}
const Header = () => {
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

const handlePhase = (phases: Phase[])=>{
		setPhases(phases);
	}

  useEffect(() => {
    // This effect will run every time the `phases` state changes
    console.log('Phases have changed:', phases);
    // You can add any logic here that you want to run when `phases` changes
  }, [phases]);

  return (
<div>
			<div className='flex justify-between items-center p-4 bg-blue-800 text-white flex-row'>
				<h3>Honor of Kings Ban/Pick Simulator</h3>
			<div className='gap-4 flex flex-row'>
				<button className={`cursor:pointer text-black ${phases===normalPhases?'underline':''}`} onClick={()=>handlePhase(normalPhases)}>Normal/Ranking (2 bans)</button>
				<button className={`cursor:pointer text-black ${phases===matchPhases?'underline':''}`} onClick={()=>handlePhase(matchPhases)}>Match (4 bans) </button>
			</div>
			<img src='/github-mark-white.png' className='w-8 h-8 cursor-pointer' onClick={()=>window.open('https://github.com/qiqi47')}/>
			</div>
		</div>
  )
}

export default Header