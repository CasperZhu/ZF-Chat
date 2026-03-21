import React from 'react';
import { MessageCircle, Users, Sparkles, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: MessageCircle, label: '聊天', path: '/chats' },
    { icon: Users, label: '朋友', path: '/friends' },
    { icon: Sparkles, label: '动态', path: '/invite' },
    { icon: Settings, label: '设置', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-3 bg-surface-container/80 backdrop-blur-md rounded-t-3xl shadow-lg z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={cn(
              "flex flex-col items-center gap-1 transition-all duration-200",
              isActive 
                ? "bg-primary/10 text-primary rounded-2xl px-6 py-2" 
                : "text-on-surface-variant opacity-70 hover:opacity-100 px-2 py-2"
            )}
          >
            <item.icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
