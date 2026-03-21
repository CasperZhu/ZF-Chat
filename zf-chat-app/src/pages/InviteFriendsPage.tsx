import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Users, MessageCircle, AtSign, Globe, Mail, MessageSquare, Copy, Sparkles, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

import BottomNav from '../components/BottomNav';

export default function InviteFriendsPage() {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: MessageCircle, label: '微信' },
    { icon: AtSign, label: 'QQ' },
    { icon: Globe, label: '微博' },
    { icon: Mail, label: '邮件' },
    { icon: MessageSquare, label: '短信' },
  ];

  const contacts = [
    { name: '陈小明', phone: '138 **** 9920', avatar: 'https://picsum.photos/seed/chen/100', invited: false },
    { name: '林静', phone: '155 **** 0012', avatar: 'https://picsum.photos/seed/lin/100', invited: true },
    { name: '王大为', phone: '189 **** 8876', avatar: 'https://picsum.photos/seed/wang/100', invited: false },
  ];

  return (
    <div className="min-h-screen bg-surface pb-32">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">邀请朋友</h1>
        </div>
        <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <Search className="w-6 h-6 text-primary" />
        </button>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary to-primary-container p-8 text-white shadow-xl">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl font-extrabold mb-2">分享快乐</h2>
            <p className="opacity-90 text-sm font-medium max-w-[240px]">邀请您的好友加入 Emerald Chat，开启高品质社交体验。</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20">
            <Users className="w-40 h-40" />
          </div>
        </section>

        {/* Quick Share */}
        <section>
          <h3 className="font-headline font-bold text-lg mb-4 ml-2">快速分享</h3>
          <div className="grid grid-cols-5 gap-4">
            {socialLinks.map((link, index) => (
              <button key={index} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-medium opacity-70">{link.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Invite Link */}
        <section className="bg-surface-container-low p-6 rounded-[24px] space-y-3">
          <h3 className="font-headline font-bold text-lg">专属邀请链接</h3>
          <div className="flex items-center gap-2 bg-surface-container-highest p-4 rounded-xl">
            <span className="text-sm font-medium text-on-surface truncate flex-1">emerald.chat/invite/user_88x922</span>
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-shadow active:scale-95">
              复制
            </button>
          </div>
          <p className="text-[11px] text-on-surface-variant px-1 opacity-60">每成功邀请一位好友，您将获得 15 天高级会员体验。</p>
        </section>

        {/* Contacts */}
        <section className="space-y-4">
          <div className="flex items-center justify-between mb-2 px-2">
            <h3 className="font-headline font-bold text-lg">邀请通讯录好友</h3>
            <span className="text-[10px] font-bold text-primary bg-primary-container/20 px-3 py-1 rounded-full">32 位联系人</span>
          </div>
          <div className="space-y-2">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-[20px] transition-colors hover:bg-surface-container">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-container">
                    <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{contact.name}</p>
                    <p className="text-xs text-on-surface-variant">{contact.phone}</p>
                  </div>
                </div>
                <button 
                  disabled={contact.invited}
                  className={cn(
                    "font-bold text-sm px-4 py-2 rounded-full transition-colors",
                    contact.invited 
                      ? "bg-surface-container-highest text-on-surface-variant opacity-50 cursor-not-allowed" 
                      : "text-primary border border-outline-variant/30 hover:bg-primary/5"
                  )}
                >
                  {contact.invited ? '已邀请' : '邀请'}
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-4 font-headline font-bold text-on-surface-variant opacity-60 text-sm hover:opacity-100 transition-opacity">
            查看更多联系人
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
