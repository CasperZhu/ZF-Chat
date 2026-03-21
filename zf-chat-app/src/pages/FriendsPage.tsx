import React from 'react';
import { motion } from 'motion/react';
import { Search, Menu, MessageCircle, Users, Sparkles, Settings, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_FRIENDS } from '../constants';
import { cn } from '../utils/cn';

import BottomNav from '../components/BottomNav';

export default function FriendsPage() {
  const navigate = useNavigate();

  // Group friends by initial
  const groupedFriends = MOCK_FRIENDS.reduce((acc, friend) => {
    const initial = friend.initial.toUpperCase();
    if (!acc[initial]) {
      acc[initial] = [];
    }
    acc[initial].push(friend);
    return acc;
  }, {} as Record<string, typeof MOCK_FRIENDS>);

  // Sort initials
  const sortedInitials = Object.keys(groupedFriends).sort();

  return (
    <div className="min-h-screen bg-surface pb-32">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <h1 className="font-headline font-extrabold text-2xl tracking-tight text-primary">朋友</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <UserPlus className="w-6 h-6 text-primary" />
          </button>
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Search className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-2xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6 px-2">
          <div className="bg-surface-container-highest rounded-full flex items-center px-6 py-3 gap-3 focus-within:bg-surface-container-lowest focus-within:ambient-shadow transition-all">
            <Search className="w-5 h-5 text-outline" />
            <input 
              type="text" 
              placeholder="搜索朋友..." 
              className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder-outline"
            />
          </div>
        </div>

        {/* Friends List grouped by initial */}
        <div className="space-y-6">
          {sortedInitials.map((initial) => (
            <div key={initial} className="space-y-2">
              <div className="px-4 py-1">
                <span className="text-xs font-bold text-primary opacity-60 tracking-widest">{initial}</span>
              </div>
              <div className="space-y-1">
                {groupedFriends[initial].map((friend) => (
                  <motion.div
                    key={friend.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all hover:bg-surface-container-low"
                  >
                    <div className="relative flex-shrink-0">
                      <img 
                        src={friend.avatar} 
                        alt={friend.name} 
                        className="w-12 h-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-headline font-bold text-on-surface truncate">{friend.name}</h3>
                      <p className="text-xs text-on-surface-variant truncate opacity-70">{friend.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
