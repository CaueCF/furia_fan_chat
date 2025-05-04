import React from 'react'
import LiveMatchSection from '../components/LiveMatchSection'
import MatchesSection from '../components/MatchesSection'
import TeamSection from '../components/TeamSection'
import ChatSection from '../components/ChatSection'
interface HomePageProps {
  activeTab: string
}
const HomePage: React.FC<HomePageProps> = ({ activeTab }) => {
  return (
    <>
      {activeTab === 'live' && <LiveMatchSection />}
      {activeTab === 'matches' && <MatchesSection />}
      {activeTab === 'team' && <TeamSection />}
      {activeTab === 'chat' && <ChatSection />}
    </>
  )
}
export default HomePage
