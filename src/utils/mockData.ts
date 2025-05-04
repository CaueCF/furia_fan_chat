// Mock data for development purposes
export const teamMembers = [{
  id: 1,
  nickname: "KSCERATO",
  fullName: "Kaike Cerato",
  role: "Rifler",
  age: 24,
  country: "Brasil",
  avatar: "/players/KSCERATO.jpg",
  stats: {
    rating: 1.22,
    killsPerRound: 0.76,
    headshots: "53.2%",
    mapsPlayed: 87
  }
}, {
  id: 2,
  nickname: "yuurih",
  fullName: "Yuri Santos",
  role: "Rifler",
  age: 24,
  country: "Brasil",
  avatar: "/players/Yuurih.jpg",
  stats: {
    rating: 1.17,
    killsPerRound: 0.72,
    headshots: "48.7%",
    mapsPlayed: 87
  }
}, {
  id: 3,
  nickname: "arT",
  fullName: "Andrei Piovezan",
  role: "AWPer/IGL",
  age: 27,
  country: "Brasil",
  avatar: "/players/ArT.jpg",
  stats: {
    rating: 0.97,
    killsPerRound: 0.65,
    headshots: "41.3%",
    mapsPlayed: 87
  }
}, {
  id: 4,
  nickname: "chelo",
  fullName: "Marcelo Cespedes",
  role: "Rifler",
  age: 25,
  country: "Brasil",
  avatar: "/players/Chelo.jpg",
  stats: {
    rating: 1.06,
    killsPerRound: 0.68,
    headshots: "47.8%",
    mapsPlayed: 87
  }
}, {
  id: 5,
  nickname: "FalleN",
  fullName: "Gabriel Toledo",
  role: "AWPer",
  age: 33,
  country: "Brasil",
  avatar: "/players/FalleN.jpg",
  stats: {
    rating: 1.08,
    killsPerRound: 0.62,
    headshots: "36.1%",
    mapsPlayed: 87
  }
}];
export const recentMatches = [{
  id: 1,
  opponent: "NAVI",
  oponnent_logo:"/logos/Natus_Vincere_logo.png",
  date: "15-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Won",
  score: "16-14",
  map: "Inferno"
}, {
  id: 2,
  opponent: "Vitality",
  oponnent_logo:"/logos/Team_Vitality_logo2.png",
  date: "12-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Lost",
  score: "10-16",
  map: "Mirage"
}, {
  id: 3,
  opponent: "MOUZ",
  oponnent_logo:"/logos/MOUZ_logo.png",
  date: "08-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Won",
  score: "16-11",
  map: "Nuke"
}, {
  id: 4,
  opponent: "Liquid",
  oponnent_logo:"/logos/Team_Liquid_logo.png",
  date: "05-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Lost",
  score: "13-16",
  map: "Ancient"
}, {
  id: 5,
  opponent: "FaZe",
  oponnent_logo:"/logos/FaZe_Clan_logo.png",
  date: "01-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Won",
  score: "16-9",
  map: "Overpass"
}];
export const upcomingMatches = [{
  id: 1,
  opponent: "Cloud9",
  oponnent_logo:"/logos/Cloud9_logo.png",
  date: "20-11-2023",
  time: "15:00",
  tournament: "BLAST Premier Fall Final 2023"
}, {
  id: 2,
  opponent: "G2",
  oponnent_logo:"/logos/G2_Esports_logo.png",
  date: "25-11-2023",
  time: "18:30",
  tournament: "BLAST Premier Fall Final 2023"
}, {
  id: 3,
  opponent: "Astralis",
  oponnent_logo:"/logos/Astralis_logo.png",
  date: "01-12-2023",
  time: "12:00",
  tournament: "ESL Pro League Season 18"
}];
export const liveMatch = {
  inProgress: true,
  opponent: "Heroic",
  oponnent_logo:"/logos/HEROIC_logo.png",
  tournament: "BLAST Premier Fall Final 2023",
  map: "Mirage",
  score: {
    furia: 12,
    opponent: 10
  },
  currentRound: 23,
  players: [{
    nickname: "KSCERATO",
    kills: 21,
    deaths: 15,
    assists: 6,
    adr: 89.4
  }, {
    nickname: "yuurih",
    kills: 18,
    deaths: 14,
    assists: 8,
    adr: 82.7
  }, {
    nickname: "arT",
    kills: 14,
    deaths: 17,
    assists: 5,
    adr: 70.3
  }, {
    nickname: "chelo",
    kills: 16,
    deaths: 16,
    assists: 3,
    adr: 75.8
  }, {
    nickname: "saffee",
    kills: 19,
    deaths: 13,
    assists: 2,
    adr: 84.1
  }]
};
export const chatMessages = [{
  id: 1,
  user: "CSfan123",
  message: "Vai FURIA! Mal posso esperar pela partida contra a Heroic!",
  timestamp: "12:32"
}, {
  id: 2,
  user: "BrasilCS",
  message: "KSCERATO tá muito brabo hoje!",
  timestamp: "12:33"
}, {
  id: 3,
  user: "FuriaFan2023",
  message: "Cara, que último round foi esse! Retake perfeito do time.",
  timestamp: "12:35"
}, {
  id: 4,
  user: "GGamer",
  message: "Alguém sabe quando é o próximo jogo?",
  timestamp: "12:36"
}, {
  id: 5,
  user: "CSGOmaster",
  message: "arT entrou estourando de novo! Só os furiosos sabem como abrir o bomb!",
  timestamp: "12:38"
}, {
  id: 6,
  user: "FuriosoBrabo",
  message: "Eu acho que eles precisam focar mais em dominar o mid nessa metade da partida",
  timestamp: "12:40"
}, {
  id: 7,
  user: "ESportsFan",
  message: "saffee outra kill de AWP! Ele tá imparável hoje",
  timestamp: "12:41"
}];