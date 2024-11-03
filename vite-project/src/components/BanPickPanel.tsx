import { useState, useEffect } from 'react';
import HeroList from './HeroList';

// Type definitions
interface Hero {
  id: number;
  chineseName: string;
  englishName: string;
  occupation: string;
  altOccupation?: string;
  combo?: number[];
  counter?: number[];
  beCountered?: number[];
}

interface Role {
  id: string;
  name: string;
  englishName: string;
}

interface Phase {
  team: 'blue' | 'red';
  action: 'ban' | 'pick';
  text: string;
}

interface SelectedHeroes {
  blueBans: number[];
  redBans: number[];
  bluePicks: number[];
  redPicks: number[];
}

interface HistoryState {
  selectedHeroes: SelectedHeroes;
  currentPhase: number;
}

interface Recommendations {
  combos: number[];
  counters: number[];
  beCountered: number[];
}

const BanPickPanel = () => {

  const [userTeam, setUserTeam] = useState<'blue' | 'red'>('blue');
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedHeroes, setSelectedHeroes] = useState<SelectedHeroes>({
    blueBans: [],
    redBans: [],
    bluePicks: [],
    redPicks: [],
  });
  const [history, setHistory] = useState<HistoryState[]>([]);

  const phases: Phase[] = [
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

  const roles: Role[] = [
    { id: 'Jungling', name: '打野', englishName: 'Jungling' },
    { id: 'Clash Lane', name: '对抗路', englishName: 'Clash Lane' },
    { id: 'Mid Lane', name: '中路', englishName: 'Mid Lane' },
    { id: 'Roaming', name: '游走', englishName: 'Roaming' },
    { id: 'Farm Lane', name: '发育路', englishName: 'Farm Lane' },
  ];

  useEffect(() => {
    if (currentPhase < phases.length) {
      setUserTeam(phases[currentPhase].team);
    }
  }, [currentPhase]);

  const handleChampionClick = (championId: number): void => {
    if (currentPhase >= phases.length) return;

    const currentAction = phases[currentPhase];
    const { team, action } = currentAction;

    setHistory(prev => [...prev, {
      selectedHeroes: { ...selectedHeroes },
      currentPhase
    }]);

    setSelectedHeroes(prev => {
      const key = `${team}${action === 'ban' ? 'Bans' : 'Picks'}` as keyof SelectedHeroes;
      return {
        ...prev,
        [key]: [...prev[key], championId]
      };
    });

    setCurrentPhase(prev => prev + 1);
  };

  const handleUndo = (): void => {
    if (history.length === 0) return;
    
    const lastState = history[history.length - 1];
    setSelectedHeroes(lastState.selectedHeroes);
    setCurrentPhase(lastState.currentPhase);
    setHistory(prev => prev.slice(0, -1));
  };

  const resetDraft = (): void => {
    setCurrentPhase(0);
    setSelectedHeroes({
      blueBans: [],
      redBans: [],
      bluePicks: [],
      redPicks: [],
    });
    setSelectedRole('all');
    setHistory([]);
  };

  const getHeroById = (id: number): Hero | undefined => 
    HeroList.find(hero => hero.id === id);

  const getTeamPicks = (team: 'blue' | 'red'): number[] => {
    return team === 'blue' ? selectedHeroes.bluePicks : selectedHeroes.redPicks;
  };

const getRecommendations = (): Recommendations => {
    const currentTeamPicks = getTeamPicks(userTeam);
    if (currentTeamPicks.length === 0) return {
      combos: [],
      counters: [],
      beCountered: []
    };

    const recommendations: Recommendations = {
      combos: [],
      counters: [],
      beCountered: []
    };

    currentTeamPicks.forEach(heroId => {
      const hero = getHeroById(heroId);
      if (hero) {
        if (hero.combo) recommendations.combos.push(...hero.combo);
        if (hero.counter) recommendations.counters.push(...hero.counter);
        if (hero.beCountered) recommendations.beCountered.push(...hero.beCountered);
      }
    });

    return recommendations;
  };

  const isChampionSelected = (championId: number): boolean => {
    const allSelected = [
      ...selectedHeroes.blueBans,
      ...selectedHeroes.redBans,
      ...selectedHeroes.bluePicks,
      ...selectedHeroes.redPicks,
    ];
    return allSelected.includes(championId);
  };

  const getCurrentActionText = (): string => {
    if (currentPhase >= phases.length) return 'Draft Complete';
    return phases[currentPhase].text;
  };

  const isUserTurn = (): boolean => {
    if (currentPhase >= phases.length) return false;
    return phases[currentPhase].team === userTeam;
  };

  const getBackgroundColor = (): string => {
    if (currentPhase >= phases.length) return 'from-gray-900 to-gray-800';
    return phases[currentPhase].team === 'blue' 
      ? 'from-blue-900/50 to-blue-800/50'
      : 'from-red-900/50 to-red-800/50';
  };

  const filteredHeroes = HeroList.filter(item => 
    selectedRole === 'all' || item.occupation === selectedRole || item.altOccupation === selectedRole
  );

  const getRecommendationSources = (heroId: number, currentTeamPicks: number[]): string[] => {
    return currentTeamPicks
      .map(pickId => {
        const hero = getHeroById(pickId);
        if (hero) {
          if (hero.combo && hero.combo.includes(heroId)) return hero.chineseName;
          if (hero.counter && hero.counter.includes(heroId)) return hero.chineseName;
          if (hero.beCountered && hero.beCountered.includes(heroId)) return hero.chineseName;
        }
        return null;
      })
      .filter((name): name is string => name !== null);
  };



  return (
    <div className={`min-h-screen bg-gradient-to-b ${getBackgroundColor()} p-4 transition-all duration-500 w-[100vw] flex flex-row`}>
<div className='w-[80%]'>
      {/* Header Controls */}
   <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setUserTeam('blue')}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                userTeam === 'blue' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              Blue Team
            </button>
            <button
              onClick={() => setUserTeam('red')}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                userTeam === 'red' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              Red Team
            </button>
          </div>
          <div className="text-white text-xl font-bold">
            {getCurrentActionText()}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleUndo}
              disabled={history.length === 0}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                history.length > 0 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Undo
            </button>
            <button
              onClick={resetDraft}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-colors duration-300"
            >
              Reset Draft
            </button>
          </div>
        </div>

      {/* Role Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {roles.map(role => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role.id)}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              selectedRole === role.id 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {role.name}
          </button>
        ))}
      </div>

      {/* Main Layout */}
      <div className="flex gap-4">
        {/* Blue Team Side Panel */}
        <div className="w-32 space-y-4">
          <div className="bg-blue-900/30 p-4 rounded">
            <h3 className="text-blue-400 font-bold mb-4">Blue Team</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-red-500 font-bold mb-2">Bans</h4>
                <div className="grid grid-cols-3 gap-2">
                 {selectedHeroes.blueBans.map(id => {
          const hero = getHeroById(id);
          return hero && (
            <div key={id} className="aspect-square bg-gray-700 rounded overflow-hidden opacity-50">
              <img                   src={`/src/assets/heroesImg/${hero.id}.png`} 
 alt={hero.englishName} className="w-full h-full object-cover" />
            </div>
          );
        })}
                </div>
              </div>
              <div>
                <h4 className="text-green-500 font-bold mb-2">Picks</h4>
                <div className="grid gap-2">
                  {selectedHeroes.bluePicks.map(id => {
const hero = getHeroById(id);
return hero && (
                    <div key={id} className="aspect-square bg-gray-700 rounded overflow-hidden">
                      <img   src={`/src/assets/heroesImg/${hero.id}.png`} alt={hero.englishName} className="w-full h-full object-cover" />
                    </div> )
})}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Champion Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-7 gap-4">
            {filteredHeroes.map(item => (
              <div 
                key={item.id}
                onClick={() => !isChampionSelected(item.id) && isUserTurn() && handleChampionClick(item.id)}
                className={`
                  relative aspect-square rounded-lg overflow-hidden transition-all
                  ${isChampionSelected(item.id) 
                    ? 'opacity-50 cursor-not-allowed' 
                    : isUserTurn() 
                      ? 'cursor-pointer hover:ring-2 hover:ring-yellow-500 bg-gray-700/50' 
                      : 'cursor-not-allowed bg-gray-900/50'
                  }
                `}
              >
                <img 
                  src={`/src/assets/heroesImg/${item.id}.png`} 
                  alt={item.chineseName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-1 px-2">
                   <div className="flex flex-col">
                    <span className="text-xs text-white font-bold">
                      {item.chineseName}
                    </span>
                    {/* <span className="text-xs text-gray-300">
                      {roles.find(r => r.id === item.occupation)?.name}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Phase Display */}
          <div className="mt-8 flex justify-center">
            <div className={`px-6 py-3 rounded-lg ${
              phases[currentPhase]?.team === 'blue' ? 'bg-blue-900/30' : 'bg-red-900/30'
            }`}>
              <span className="text-white font-bold">
                {currentPhase >= phases.length 
                  ? 'Draft Complete!' 
                  : `${isUserTurn() ? 'Your' : 'Opponent\'s'} turn - ${getCurrentActionText()}`}
              </span>
            </div>
          </div>
        </div>

        {/* Red Team Side Panel */}
        <div className="w-32 space-y-4">
          <div className="bg-red-900/30 p-4 rounded">
            <h3 className="text-red-400 font-bold mb-4">Red Team</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-red-500 font-bold mb-2">Bans</h4>
                <div className="grid grid-cols-3 gap-2">
                     {selectedHeroes.redBans.map(id => {
          const hero = getHeroById(id);
          return hero && (
            <div key={id} className="aspect-square bg-gray-700 rounded overflow-hidden opacity-50">
              <img                   src={`/src/assets/heroesImg/${hero.id}.png`} 
 alt={hero.englishName} className="w-full h-full object-cover" />
            </div>
          );
        })}
                </div>
              </div>
              <div>
                <h4 className="text-green-500 font-bold mb-2">Picks</h4>
                <div className="grid gap-2">
                     {selectedHeroes.redPicks.map(id => {
const hero = getHeroById(id);
return hero && (
                    <div key={id} className="aspect-square bg-gray-700 rounded overflow-hidden">
                      <img   src={`/src/assets/heroesImg/${hero.id}.png`} alt={hero.englishName} className="w-full h-full object-cover" />
                    </div> )
})}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
{/* Recommendation Panel */}
   {/* Recommendation Panel */}
      <div className="w-[20%] ml-4 bg-gray-800/50 rounded-lg p-4">
        <h2 className="text-white font-bold text-xl mb-4">Recommendations</h2>
        {getRecommendations() ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-green-400 font-bold mb-2">Good Combinations</h3>
              <div className="grid grid-cols-3 gap-2">
                {getRecommendations().combos.map(heroId => {
                  const hero = getHeroById(heroId);
                  const sources = getRecommendationSources(heroId, getTeamPicks(userTeam));
                  return hero && (
                    <div key={heroId} className="flex flex-col items-center">
                      <div className="aspect-square w-full bg-gray-700/50 rounded overflow-hidden">
                        <img 
                          src={`/src/assets/heroesImg/${hero.id}.png`}
                          alt={hero.englishName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-1 text-xs text-gray-300 text-center">
                        <div>{hero.chineseName}</div>
                        <div className="text-green-400">
                          配合: {sources.join(', ')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-blue-400 font-bold mb-2">克制对方</h3>
              <div className="grid grid-cols-3 gap-2">
                {getRecommendations().counters.map(heroId => {
                  const hero = getHeroById(heroId);
                  const sources = getRecommendationSources(heroId, getTeamPicks(userTeam));
                  return hero && (
                    <div key={heroId} className="flex flex-col items-center">
                      <div className="aspect-square w-full bg-gray-700/50 rounded overflow-hidden">
                        <img 
                          src={`/src/assets/heroesImg/${hero.id}.png`}
                          alt={hero.englishName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-1 text-xs text-gray-300 text-center">
                        <div>{hero.chineseName}</div>
                        <div className="text-blue-400">
                          被{sources.join(', ')}克制
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-red-400 font-bold mb-2">被对方以下英雄克制</h3>
              <div className="grid grid-cols-3 gap-2">
                {getRecommendations().beCountered.map(heroId => {
                  const hero = getHeroById(heroId);
                  const sources = getRecommendationSources(heroId, getTeamPicks(userTeam));
                  return hero && (
                    <div key={heroId} className="flex flex-col items-center">
                      <div className="aspect-square w-full bg-gray-700/50 rounded overflow-hidden">
                        <img 
                          src={`/src/assets/heroesImg/${hero.id}.png`}
                          alt={hero.englishName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-1 text-xs text-gray-300 text-center">
                        <div>{hero.chineseName}</div>
                        <div className="text-red-400">
                         克制{sources.join(', ')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-400">
            Select heroes to see recommendations
          </div>
        )}
      </div>
    </div>
  );
};

export default BanPickPanel;