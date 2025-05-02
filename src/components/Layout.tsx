import React from 'react';
import { Flame, Calendar, Users, MessageSquare } from 'lucide-react';
interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  activeTab,
  setActiveTab
}) => {
  const tabs = [{
    id: 'live',
    label: 'Live Match',
    icon: <Flame className="w-5 h-5" />
  }, {
    id: 'matches',
    label: 'Matches',
    icon: <Calendar className="w-5 h-5" />
  }, {
    id: 'team',
    label: 'Team',
    icon: <Users className="w-5 h-5" />
  }, {
    id: 'chat',
    label: 'Fan Chat',
    icon: <MessageSquare className="w-5 h-5" />
  }];
  return <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-red-600 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/Furia_Esports_logo.png" alt="FURIA E-sports Logo" className="h-10" />
            <h1 className="text-xl font-bold text-red-600">FURIA CS Fan Hub</h1>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-6">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors 
              ${activeTab === tab.id ? 'bg-red-600 text-white' : 'hover:bg-gray-800'}`}>
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>)}
            </nav>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>
      {/* Mobile navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-red-600">
        <div className="flex justify-around">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} 
          className={`flex flex-col items-center py-3 px-5 
          ${activeTab === tab.id ? 'text-red-600' : 'text-gray-400'}`}>
              {tab.icon}
              <span className="text-xs mt-1">{tab.label}</span>
            </button>)}
        </div>
      </nav>
    </div>;
};
export default Layout;