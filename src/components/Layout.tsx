import React from 'react'
import {
  Flame,
  Calendar,
  Users,
  MessageSquare,
  LogIn,
  LogOut,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'
interface LayoutProps {
  children: React.ReactNode
  activeTab: string
  setActiveTab: (tab: string) => void
}
const Layout: React.FC<LayoutProps> = ({
  children,
  activeTab,
  setActiveTab,
}) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const tabs = [
    {
      id: 'live',
      label: 'Live Match',
      icon: <Flame className="w-5 h-5" />,
    },
    {
      id: 'matches',
      label: 'Matches',
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: 'team',
      label: 'Team',
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 'chat',
      label: 'Fan Chat',
      icon: <MessageSquare className="w-5 h-5" />,
    },
  ]

  const handleLogout = () => {
    logout()
    if (activeTab === 'chat') {
      setActiveTab('live')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="bg-[#0A0A0A] border-b border-[#919EAB] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logos/Furia_Esports_logo.png"
              alt="FURIA E-sports Logo"
              className="h-10"
            />
            <h1 className="text-xl font-bold text-white">FURIA CS Fã Hub</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 
                    rounded-md transition-colors 
                    ${activeTab === tab.id ? 'bg-white text-black' : 'hover:bg-gray-600'}`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Bem vindo, {user?.username}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>
      {/* Mobile navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-3 px-5 ${activeTab === tab.id ? 'text-white' : 'text-gray-400'}`}
            >
              {tab.icon}
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
export default Layout
