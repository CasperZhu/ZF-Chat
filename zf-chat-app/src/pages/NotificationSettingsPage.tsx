import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bell, MessageSquare, Users, Phone, ChevronRight, Volume2, Vibrate } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotificationSettingsPage() {
  const navigate = useNavigate();

  const sections = [
    { icon: MessageSquare, title: '消息通知', desc: '开启或关闭消息提醒' },
    { icon: Users, title: '群组通知', desc: '开启或关闭群组消息提醒' },
    { icon: Phone, title: '来电通知', desc: '开启或关闭来电提醒' },
    { icon: Volume2, title: '提示音', desc: '选择默认提示音' },
    { icon: Vibrate, title: '震动模式', desc: '默认' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 glass-header flex items-center gap-4 px-8 py-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">通知</h1>
      </header>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 px-4 max-w-2xl mx-auto space-y-6"
      >
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden ambient-shadow">
          {sections.map((item, index) => (
            <div 
              key={index}
              className="flex items-center px-6 py-5 hover:bg-surface-container-low transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center mr-5">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 border-b border-outline-variant/10 pb-1">
                <h3 className="font-semibold text-on-surface">{item.title}</h3>
                <p className="text-xs text-on-surface-variant/70">{item.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-outline-variant" />
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-6 ambient-shadow space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-on-surface">显示预览</h3>
              <p className="text-xs text-on-surface-variant/70">在通知中显示消息内容预览</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-on-surface">应用内通知</h3>
              <p className="text-xs text-on-surface-variant/70">在应用内显示通知横幅</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
