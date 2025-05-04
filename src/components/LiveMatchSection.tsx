import React from 'react';
import { liveMatch } from '../utils/mockData';

const LiveMatchSection = () => {
  if (!liveMatch.inProgress) {
    return <div className="flex flex-col items-center justify-center h-96 text-center">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">No Live Match</h2>
        <p className="text-gray-500">
          Não há lives abertas no momento. Cheque a programação para saber quando serão as próximas.
        </p>
      </div>;
  }
   
  const stroke = "#919EAB";
  const background = "#131313";

  return <div className="space-y-6">
      <div className={`bg-[${background}] rounded-lg overflow-hidden border border-[${stroke}]`}>
        <div className="bg-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full 
                text-xs font-medium bg-red-400 text-black mr-2`}>
                LIVE
              </span>
              <span className="text-sm text-black">{liveMatch.tournament}</span>
            </div>
            <div className="text-sm text-black">Map: {liveMatch.map}</div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col items-center">
              <img src="/logos/Furia_Esports_logo.png" alt="FURIA Logo" className="h-16 mb-2" />
              <span className="text-xl font-bold">FURIA</span>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold mb-1 text-gray-400`}>
                <span className='text-white'>
                  {liveMatch.score.furia}
                  </span>
                <span className="mx-2">:</span>
                <span>
                  {liveMatch.score.opponent}
                  </span>
              </div>
              <div className={`text-sm`}>
                Round {liveMatch.currentRound}/30
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={liveMatch.oponnent_logo}
              alt="Heroic Logo" className="h-16 mb-2" />
              <span className="text-xl font-bold">{liveMatch.opponent}</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b border-[${stroke}] text-white`}>
                  <th className="text-left py-2">Player</th>
                  <th className="py-2">K</th>
                  <th className="py-2">D</th>
                  <th className="py-2">A</th>
                  <th className="py-2">ADR</th>
                </tr>
              </thead>
              <tbody>
                {liveMatch.players.map((player, index) => <tr key={index} className={`border-b border-[${stroke}] text-[${stroke}]`}>
                    <td className="py-2 font-medium">{player.nickname}</td>
                    <td className="py-2 text-center">{player.kills}</td>
                    <td className="py-2 text-center">{player.deaths}</td>
                    <td className="py-2 text-center">{player.assists}</td>
                    <td className="py-2 text-center">{player.adr}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={`bg-[${background}] rounded-lg p-6 border border-[${stroke}]`}>
        <h3 className="text-xl font-bold mb-4">Match Analysis</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-white mb-2">Key Highlights</h4>
            <ul className={`list-disc list-inside space-y-1 text-[${stroke}]`}>
              <li>
                FURIA's strong T-side performance with 9 rounds in the first
                half
              </li>
              <li>
                KSCERATO lidera com 21 abates e vários clutches
              </li>
              <li>saffee's AWP domina o meio e o lado A</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Estratégia Atual</h4>
            <p className={`text-[${stroke}]`}>
              FURIA está focando em um controle mais agressivo do meio e fazendo rápidas rotações entre os pontos. 
              FURIA is focusing on aggressive mid control and fast rotations
              between sites. The team's utility usage has been exceptional, with
              perfectly timed executes on the A site.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default LiveMatchSection;