import React from 'react';
import { teamMembers } from '../utils/mockData';
import { Flag, Award, BarChart2, Trophy } from 'lucide-react';
const TeamSection = () => {

  const stroke = "#919EAB";
  const background = "#131313";

  return <div className="space-y-6">
      <div className={`bg-white rounded-lg p-6 text-black`}>
        <h2 className="text-2xl font-bold mb-2">Time de CS da FURIA Esports</h2>
        <p className="text-gray-950"> 
        Uma das principais organizações de eSports do Brasil, conhecida por seu
        estilo de jogo agressivo e base de fãs apaixonada. A equipe tem consistentemente
        se classificado entre as melhores equipes de CS do mundo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map(player => <div key={player.id} 
        className={`bg-[${background}] rounded-lg overflow-hidden 
        border border-[${stroke} transition-colors`}>
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
              <div className={`flex justify-between mb-3 text-white`}>
                <div className="flex items-center">
                  <Flag className="w-4 h-4 mr-1" />
                  <span>{player.country}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  <span>{player.role}</span>
                </div>
                <div>Idade: {player.age}</div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <BarChart2 className="w-4 h-4 mr-1 text-white" />
                  <span>Estatísticas 2023</span>
                </h4>
                <div className={`grid grid-cols-2 gap-2 text-sm`}>
                  <div className={`p-2 rounded bg-[#0D0D0D]`}>
                    <div className="text-gray-400">Rating</div>
                    <div className="font-bold">{player.stats.rating}</div>
                  </div>
                  <div className={`p-2 rounded bg-[#0D0D0D]`}>
                    <div className="text-gray-400">K/R</div>
                    <div className="font-bold">
                      {player.stats.killsPerRound}
                    </div>
                  </div>
                  <div className={`p-2 rounded bg-[#0D0D0D]`}>
                    <div className="text-gray-400">HS%</div>
                    <div className="font-bold">{player.stats.headshots}</div>
                  </div>
                  <div className={`p-2 rounded bg-[#0D0D0D]`}>
                    <div className="text-gray-400">Mapas</div>
                    <div className="font-bold">{player.stats.mapsPlayed}</div>
                  </div>
                </div>
              </div>
              <button className={`mt-4 w-full py-2 
              bg-gray-300 hover:bg-gray-400 rounded-md 
                font-medium  text-black transition-colors`}>
                Perfil do jogador
              </button>
            </div>
          </div>)}
      </div>
      <div className={`bg-[${background}}] rounded-lg p-6 border border-[${stroke}]`}>
        <h3 className="text-xl font-bold mb-4">Conquistas do Time</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-yellow-500 rounded-full p-1 mr-3 mt-1">
              <Trophy className="w-4 h-4 text-black" />
            </div>
            <div>
              <h4 className="font-medium">
                1º Lugar - ESL Pro League Season 16
              </h4>
              <p className="text-sm text-gray-400">Setembro 2022</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-gray-400 rounded-full p-1 mr-3 mt-1">
              <Trophy className="w-4 h-4 text-black" />
            </div>
            <div>
              <h4 className="font-medium">2º Lugar - IEM Rio Major 2022</h4>
              <p className="text-sm text-gray-400">Novembro 2022</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-700 rounded-full p-1 mr-3 mt-1">
              <Trophy className="w-4 h-4 text-black" />
            </div>
            <div>
              <h4 className="font-medium">
                3º-4º Lugar - BLAST Premier Spring Final 2023
              </h4>
              <p className="text-sm text-gray-400">Junho 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TeamSection;