import React, { useState } from 'react';
import { chatMessages } from '../utils/mockData';
import { Send, User } from 'lucide-react';
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
      user: 'You',
      message: newMessage,
      timestamp: `${hours}:${minutes}`
    };
    setMessages([...messages, message]);
    setNewMessage('');
  };
  return <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
      <div className="bg-gradient-to-r from-red-900 to-red-600 rounded-t-lg p-4">
        <h2 className="text-xl font-bold">FURIA Fan Chat</h2>
        <p className="text-sm text-gray-100">
          Chat with other FURIA fans during matches and discuss team performance
        </p>
      </div>
      <div className="flex-grow bg-gray-900 p-4 overflow-y-auto border-l border-r border-gray-800">
        {messages.map(msg => <div key={msg.id} className={`mb-4 flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${msg.user === 'You' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-gray-800 text-white rounded-tl-none'}`}>
              <div className="flex items-center mb-1">
                {msg.user !== 'You' && <div className="bg-gray-700 rounded-full p-1 mr-2">
                    <User className="w-3 h-3" />
                  </div>}
                <span className="font-medium text-sm">{msg.user}</span>
                <span className="text-xs ml-2 opacity-70">{msg.timestamp}</span>
              </div>
              <p>{msg.message}</p>
            </div>
          </div>)}
      </div>
      <div className="bg-gray-900 rounded-b-lg border-t border-l border-r border-b border-gray-800 p-4">
        <form onSubmit={handleSendMessage} className="flex">
          <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} className="flex-grow bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="Type your message..." />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white rounded-r-lg px-4 py-2 flex items-center justify-center transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>;
};
export default ChatSection;