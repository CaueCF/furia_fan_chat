import React, { useState } from 'react';
import Layout from './components/Layout';
import ChatSection from './components/ChatSection';
import TeamSection from './components/TeamSection';
import MatchesSection from './components/MatchesSection';
import LiveMatchSection from './components/LiveMatchSection';
export function App() {
  const [activeTab, setActiveTab] = useState('live');
  return <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'live' && <LiveMatchSection />}
      {activeTab === 'matches' && <MatchesSection />}
      {activeTab === 'team' && <TeamSection />}
      {activeTab === 'chat' && <ChatSection />}
    </Layout>;
}