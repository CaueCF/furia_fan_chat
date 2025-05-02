import React, { useState } from 'react';
import { recentMatches, upcomingMatches } from '../utils/mockData';
import { Calendar, Clock, Trophy } from 'lucide-react';
const MatchesSection = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const logoFuria = "/Furia_Esports_logo.png";

  return <div className="space-y-6">
      <div className="flex border-b border-gray-800">
        <button onClick={() => setActiveTab('upcoming')} 
        className={`px-4 py-2 font-medium 
          ${activeTab === 'upcoming' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400 hover:text-white'}`
        }>
          Upcoming Matches
        </button>
        <button onClick={() => setActiveTab('recent')} 
        className={`px-4 py-2 font-medium 
        ${activeTab === 'recent' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400 hover:text-white'}`
        }>
          Recent Results
        </button>
      </div>
      {activeTab === 'upcoming' && <div className="space-y-4">
          {upcomingMatches.map(match => <div key={match.id} 
          className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-red-600 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    FURIA vs {match.opponent}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span>{match.tournament}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{match.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{match.time} BRT</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={logoFuria} 
                  alt="FURIA Logo" 
                  className="h-10 mr-2" />
                  <span className="font-bold">FURIA</span>
                </div>
                <div className="text-lg font-bold text-gray-500">VS</div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{match.opponent}</span>
                  <img src={match.oponnent_logo} 
                  alt={`${match.opponent} Logo`} 
                  className="h-10" 
                  onError={e => {
              e.currentTarget.src = '';
            }} />
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-medium transition-colors">
                Set Reminder
              </button>
            </div>)}
        </div>}
      {activeTab === 'recent' && <div className="space-y-4">
          {recentMatches.map(match => <div key={match.id} 
          className={`bg-gray-900 rounded-lg p-4 border ${match.result === 'Won' ? 'border-green-600' : 'border-red-600'}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    FURIA vs {match.opponent}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span>{match.tournament}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{match.date}</span>
                  </div>
                  <div className="text-sm">
                    Map: <span className="text-gray-300">{match.map}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={logoFuria} 
                  alt="FURIA Logo" className="h-10 mr-2" />
                  <span className="font-bold">FURIA</span>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold">
                    {match.score.split('-')[0]} : {match.score.split('-')[1]}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded 
                    ${match.result === 'Won' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                    {match.result.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{match.opponent}</span>
                  <img src={match.oponnent_logo} 
                  alt={`${match.opponent} Logo`} className="h-10" 
                  onError={e => {
              e.currentTarget.src = '';
            }} />
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-md font-medium transition-colors">
                View Match Details
              </button>
            </div>)}
        </div>}
    </div>;
};
export default MatchesSection;