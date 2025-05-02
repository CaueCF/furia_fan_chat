import React from 'react';
import { teamMembers } from '../utils/mockData';
import { Flag, Award, BarChart2, Trophy } from 'lucide-react';
const TeamSection = () => {
  return <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900 to-red-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">FURIA Esports CS Team</h2>
        <p className="text-gray-100">
          One of Brazil's premier esports organizations, known for their
          aggressive playstyle and passionate fanbase. The team has consistently
          ranked among the top CS teams globally.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map(player => <div key={player.id} 
        className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-colors">
            <div className="h-48 overflow-hidden relative">
              <img src={player.avatar} alt={player.nickname} className="w-full h-full object-cover" onError={e => {
            e.currentTarget.src = '';
          }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-xl font-bold">{player.nickname}</h3>
                <p className="text-sm text-gray-300">{player.fullName}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-3">
                <div className="flex items-center">
                  <Flag className="w-4 h-4 mr-1 text-gray-400" />
                  <span>{player.country}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1 text-gray-400" />
                  <span>{player.role}</span>
                </div>
                <div>Age: {player.age}</div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <BarChart2 className="w-4 h-4 mr-1 text-red-500" />
                  <span>2023 Statistics</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">Rating</div>
                    <div className="font-bold">{player.stats.rating}</div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">K/R</div>
                    <div className="font-bold">
                      {player.stats.killsPerRound}
                    </div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">HS%</div>
                    <div className="font-bold">{player.stats.headshots}</div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">Maps</div>
                    <div className="font-bold">{player.stats.mapsPlayed}</div>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-medium transition-colors">
                Player Profile
              </button>
            </div>
          </div>)}
      </div>
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h3 className="text-xl font-bold mb-4">Team Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-yellow-500 rounded-full p-1 mr-3 mt-1">
              <Trophy className="w-4 h-4 text-black" />
            </div>
            <div>
              <h4 className="font-medium">
                1st Place - ESL Pro League Season 16
              </h4>
              <p className="text-sm text-gray-400">September 2022</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-gray-400 rounded-full p-1 mr-3 mt-1">
              <Trophy className="w-4 h-4 text-black" />
            </div>
            <div>
              <h4 className="font-medium">2nd Place - IEM Rio Major 2022</h4>
              <p className="text-sm text-gray-400">November 2022</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-700 rounded-full p-1 mr-3 mt-1">
              <Trophy className="w-4 h-4 text-black" />
            </div>
            <div>
              <h4 className="font-medium">
                3rd-4th Place - BLAST Premier Spring Final 2023
              </h4>
              <p className="text-sm text-gray-400">June 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TeamSection;