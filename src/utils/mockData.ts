// Mock data for development purposes
export const teamMembers = [{
  id: 1,
  nickname: "KSCERATO",
  fullName: "Kaike Cerato",
  role: "Rifler",
  age: 24,
  country: "Brazil",
  avatar: "https://img-cdn.hltv.org/playerbodyshot/Q7F9V4iF-Rq9vXYjX7QCoj.png?ixlib=java-2.1.0&w=400&s=9b8b49f138e0bc15804cebaedd1968e7",
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
  country: "Brazil",
  avatar: "https://img-cdn.hltv.org/playerbodyshot/BFAUH7qFXoYYNlvPJEEQu6.png?ixlib=java-2.1.0&w=400&s=c02d5e214e9b7b7f5c7a8a5da2b40c14",
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
  country: "Brazil",
  avatar: "https://img-cdn.hltv.org/playerbodyshot/IkNfHcCmP_i3-EZXgZ-BQV.png?ixlib=java-2.1.0&w=400&s=a6de9ad35d8bea76bcd995a6d2b7d582",
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
  country: "Brazil",
  avatar: "https://img-cdn.hltv.org/playerbodyshot/gm7-AjQZXBqsT_ZMjnmLHF.png?ixlib=java-2.1.0&w=400&s=9b99a0c8c2e9e6fce9edda2a50b5c077",
  stats: {
    rating: 1.06,
    killsPerRound: 0.68,
    headshots: "47.8%",
    mapsPlayed: 87
  }
}, {
  id: 5,
  nickname: "saffee",
  fullName: "Rafael Costa",
  role: "AWPer",
  age: 27,
  country: "Brazil",
  avatar: "https://img-cdn.hltv.org/playerbodyshot/hPkqAj9Bw1P1ydRvK2Qk1M.png?ixlib=java-2.1.0&w=400&s=b6e9c8c90c51c0f33be1802f0e3c62d1",
  stats: {
    rating: 1.08,
    killsPerRound: 0.69,
    headshots: "35.2%",
    mapsPlayed: 87
  }
}];
export const recentMatches = [{
  id: 1,
  opponent: "NAVI",
  oponnent_logo:"/Natus_Vincere_logo.png",
  date: "15-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Won",
  score: "16-14",
  map: "Inferno"
}, {
  id: 2,
  opponent: "Vitality",
  oponnent_logo:"/Team_Vitality_logo.png",
  date: "12-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Lost",
  score: "10-16",
  map: "Mirage"
}, {
  id: 3,
  opponent: "MOUZ",
  oponnent_logo:"/MOUZ_logo.png",
  date: "08-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Won",
  score: "16-11",
  map: "Nuke"
}, {
  id: 4,
  opponent: "Liquid",
  oponnent_logo:"/Team_Liquid_logo.png",
  date: "05-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Lost",
  score: "13-16",
  map: "Ancient"
}, {
  id: 5,
  opponent: "FaZe",
  oponnent_logo:"/FaZe_Clan_logo.png",
  date: "01-11-2023",
  tournament: "IEM Rio Major 2023",
  result: "Won",
  score: "16-9",
  map: "Overpass"
}];
export const upcomingMatches = [{
  id: 1,
  opponent: "Cloud9",
  oponnent_logo:"/Cloud9_logo.png",
  date: "20-11-2023",
  time: "15:00",
  tournament: "BLAST Premier Fall Final 2023"
}, {
  id: 2,
  opponent: "G2",
  oponnent_logo:"/G2_Esports_logo.png",
  date: "25-11-2023",
  time: "18:30",
  tournament: "BLAST Premier Fall Final 2023"
}, {
  id: 3,
  opponent: "Astralis",
  oponnent_logo:"/Astralis_logo.png",
  date: "01-12-2023",
  time: "12:00",
  tournament: "ESL Pro League Season 18"
}];
export const liveMatch = {
  inProgress: true,
  opponent: "Heroic",
  oponnent_logo:"/HEROIC_logo.png",
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
  message: "Let's go FURIA! So hyped for the match against Heroic!",
  timestamp: "12:32"
}, {
  id: 2,
  user: "BrazilCS",
  message: "KSCERATO is on fire today!",
  timestamp: "12:33"
}, {
  id: 3,
  user: "FuriaFan2023",
  message: "That last round was insane! Perfect retake by the team.",
  timestamp: "12:35"
}, {
  id: 4,
  user: "GGamer",
  message: "Anyone know when the next tournament starts?",
  timestamp: "12:36"
}, {
  id: 5,
  user: "CSGOmaster",
  message: "arT with the aggressive push again! That's why he's the best IGL",
  timestamp: "12:38"
}, {
  id: 6,
  user: "BrazilPride",
  message: "I think they need to focus more on mid control this half",
  timestamp: "12:40"
}, {
  id: 7,
  user: "ESportsFan",
  message: "saffee with another AWP kill! He's unstoppable today",
  timestamp: "12:41"
}];