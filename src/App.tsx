import React, { useState } from 'react';
import Layout from './components/Layout';
import ChatSection from './components/ChatSection';
import TeamSection from './components/TeamSection';
import MatchesSection from './components/MatchesSection';
import LiveMatchSection from './components/LiveMatchSection';
import LoginPage from './components/LoginPage'
import  AuthProvider  from './context/AuthContext'

export function App() {
  const [activeTab, setActiveTab] = useState('live');
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <LoginPage onBack={() => setShowLogin(false)} />
  }

  return (
    <AuthProvider>
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onLoginClick={() => setShowLogin(true)}
    >
      {activeTab === 'live' && <LiveMatchSection />}
      {activeTab === 'matches' && <MatchesSection />}
      {activeTab === 'team' && <TeamSection />}
      {activeTab === 'chat' && <ChatSection />}
    </Layout>
  </AuthProvider>
    );
}