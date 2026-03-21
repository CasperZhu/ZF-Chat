import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, QrCode, ChevronRight, Key, Lock, UserCircle, MessageSquare, Bell, Database, Users, HelpCircle, Infinity, MessageCircle, Sparkles, Settings as SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import BottomNav from '../components/BottomNav';

export default function SettingsPage() {
  const navigate = useNavigate();

  const categories = [
    { icon: Key, title: '账号', desc: '安全通知、更换手机号', onClick: () => navigate('/account') },
    { icon: Lock, title: '隐私', desc: '黑名单、阅后即焚消息', onClick: () => navigate('/privacy') },
    { icon: UserCircle, title: '个人虚拟形象', desc: '创建、编辑、个人资料照片', onClick: () => navigate('/avatar') },
    { icon: MessageSquare, title: '对话', desc: '主题、壁纸、聊天记录', onClick: () => navigate('/chats-settings') },
    { icon: Bell, title: '通知', desc: '消息、群组及来电铃声', onClick: () => navigate('/notifications') },
    { icon: Database, title: '存储和数据', desc: '网络使用情况、自动下载', onClick: () => navigate('/storage') },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">设置</h1>
        </div>
        <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <Search className="w-6 h-6 text-primary" />
        </button>
      </header>

      <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto space-y-6">
        {/* Profile Hero */}
        <section className="bg-surface-container-lowest rounded-3xl p-6 flex items-center justify-between ambient-shadow hover:bg-surface-container transition-colors cursor-pointer group">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-surface-container-highest">
              <img 
                src="https://picsum.photos/seed/alex/200" 
                alt="Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-headline font-bold text-xl text-on-surface">Alex Rivera</h2>
              <p className="text-on-surface-variant opacity-80 text-sm">勇往直前。</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <QrCode className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <ChevronRight className="w-6 h-6 text-outline-variant" />
          </div>
        </section>

        {/* Categories */}
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden ambient-shadow">
          {categories.map((item, index) => (
            <div 
              key={index}
              onClick={item.onClick}
              className="flex items-center px-6 py-5 hover:bg-surface-container-low transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center mr-5">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 border-b border-outline-variant/10 pb-1">
                <h3 className="font-semibold text-on-surface">{item.title}</h3>
                <p className="text-xs text-on-surface-variant/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Actions */}
        <div className="space-y-4">
          <div className="bg-surface-container-lowest rounded-3xl p-5 flex items-center gap-5 hover:bg-surface-container transition-colors cursor-pointer" onClick={() => navigate('/invite')}>
            <div className="w-10 h-10 flex items-center justify-center">
              <Users className="w-6 h-6 text-on-surface-variant" />
            </div>
            <h3 className="font-medium text-on-surface">邀请朋友</h3>
          </div>
          <div className="bg-surface-container-lowest rounded-3xl p-5 flex items-center gap-5 hover:bg-surface-container transition-colors cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-on-surface-variant" />
            </div>
            <h3 className="font-medium text-on-surface">帮助中心、联系我们</h3>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-center pt-8 pb-4 opacity-40">
          <p className="text-[10px] font-headline tracking-widest uppercase font-bold text-on-surface-variant">来自</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Infinity className="w-4 h-4 text-on-surface" />
            <p className="font-headline font-extrabold text-sm tracking-tight text-on-surface">Meta</p>
          </div>
        </footer>
      </main>

      <BottomNav />
    </div>
  );
}
