import React, { useState } from 'react';
import { chatMessages } from '../utils/mockData';
import { Send, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
const ChatSection = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [newMessage, setNewMessage] = useState('');
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const message = {
      id: messages.length + 1,
      user: 'Você',
      message: newMessage,
      timestamp: `${hours}:${minutes}`
    };
    setMessages([...messages, message]);
    setNewMessage('');
  };

  const { isAuthenticated } = useAuth();

  const stroke = "#919EAB";
  const background = "#131313";

  return <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
      <div className="bg-white rounded-t-lg p-4">
        <h2 className="text-xl font-bold text-black">FURIA Fã Chat</h2>
        <p className="text-sm text-gray-950">
          Converse com os outros fãs da Fúria durante as partidas e discuta sobre a performace do time
        </p>
      </div>
      <div className={`flex-grow bg-[${background}] p-4 overflow-y-auto border-l border-r border-[${stroke}]`}>
        {messages.map(msg => <div key={msg.id} className={`mb-4 flex ${msg.user === 'Você' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 
              ${msg.user === 'Você' ? 'bg-white text-black rounded-tr-none' : `bg-[#0D0D0D] text-white rounded-tl-none`}`}>
              <div className="flex items-center mb-1">
                {msg.user !== 'Você' && <div className="bg-gray-700 rounded-full p-1 mr-2">
                    <User className="w-3 h-3" />
                  </div>}
                <span className="font-medium text-sm">{msg.user}</span>
                <span className="text-xs ml-2 opacity-70">{msg.timestamp}</span>
              </div>
              <p>{msg.message}</p>
            </div>
          </div>)}
      </div>
      <div className={`bg-[#0D0D0D] rounded-b-lg border-t border-l border-r border-b border-[${stroke}] p-4`}>
        <form onSubmit={handleSendMessage} className="flex">
          <input type="text" 
          value={newMessage} 
          disabled= {!isAuthenticated}
          onChange={e => setNewMessage(e.target.value)} 
          className={`flex-grow bg-[#131313] border border-[#131313] rounded-l-lg 
            px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300`} 
          placeholder="Digite sua mensagem..." />
          <button type="submit" 
          disabled= {!isAuthenticated}
          className={`bg-gray-300 hover:bg-gray-400 disabled:hover:bg-gray-300 text-black rounded-r-lg 
            px-4 py-2 flex items-center justify-center transition-colors`}>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>;
};
export default ChatSection;