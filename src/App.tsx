import React, { useState } from 'react';
import Layout from './components/Layout';
import ChatSection from './components/ChatSection';
import TeamSection from './components/TeamSection';
import MatchesSection from './components/MatchesSection';
import LiveMatchSection from './components/LiveMatchSection';
import LoginPage from './components/LoginPage'
import  AuthProvider  from './context/AuthContext'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router';
import HomePage from './pages/HomePage';


export function App() {
  const [activeTab, setActiveTab] = useState('live');
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <LoginPage onBack={() => setShowLogin(false)} />
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route 
          path="/login" 
          element={<LoginPage onBack={() => {}} />} 
          />
          <Route
            path="/"
            element={
              <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
                <HomePage activeTab={activeTab} />
              </Layout>
            }
          />
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* <Layout
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLoginClick={() => setShowLogin(true)}
        >
          {activeTab === 'live' && <LiveMatchSection />}
          {activeTab === 'matches' && <MatchesSection />}
          {activeTab === 'team' && <TeamSection />}
          {activeTab === 'chat' && <ChatSection />}
        </Layout> */}
      </BrowserRouter>
      
  </AuthProvider>
    );
}