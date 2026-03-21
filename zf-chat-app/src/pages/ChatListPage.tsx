import React from 'react';
import { motion } from 'motion/react';
import { Search, Menu, MessageSquare, Users, Sparkles, Settings, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CHATS } from '../constants';
import { cn } from '../utils/cn';
import BottomNav from '../components/BottomNav';

export default function ChatListPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface pb-32">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <h1 className="font-headline font-extrabold text-2xl tracking-tight text-primary">灵动账本</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Search className="w-6 h-6 text-primary" />
          </button>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden cursor-pointer" onClick={() => navigate('/settings')}>
            <img 
              src="https://picsum.photos/seed/user/100" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-2xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8 px-2">
          <div className="bg-surface-container-highest rounded-full flex items-center px-6 py-3 gap-3 focus-within:bg-surface-container-lowest focus-within:ambient-shadow transition-all">
            <Search className="w-5 h-5 text-outline" />
            <input 
              type="text" 
              placeholder="搜索对话..." 
              className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder-outline"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="space-y-1">
          {MOCK_CHATS.map((chat, index) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/chat/${chat.id}`)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all hover:bg-surface-container-low",
                chat.id === '1' && "bg-secondary-container/30"
              )}
            >
              <div className="relative flex-shrink-0">
                {chat.avatar ? (
                  <img 
                    src={chat.avatar} 
                    alt={chat.name} 
                    className="w-14 h-14 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-headline font-bold text-lg">
                    {chat.name.substring(0, 2)}
                  </div>
                )}
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-surface rounded-full" />
                )}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-headline font-bold text-on-surface truncate">{chat.name}</h3>
                  <span className={cn(
                    "text-[10px] font-medium uppercase tracking-wider",
                    chat.unreadCount > 0 ? "text-primary" : "text-outline"
                  )}>
                    {chat.time}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-on-surface-variant truncate pr-4">{chat.lastMessage}</p>
                  {chat.unreadCount > 0 && (
                    <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-28 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-40">
        <Plus className="w-8 h-8" />
      </button>

      <BottomNav />
    </div>
  );
}
