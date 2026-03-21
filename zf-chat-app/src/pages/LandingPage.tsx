import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle auth here
    console.log('Form submitted:', formData);
    navigate('/chats');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface p-8 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md flex flex-col items-center"
      >
        <div className="mb-8">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center ambient-shadow"
          >
            <MessageSquare className="w-12 h-12 text-on-primary-container fill-current" />
          </motion.div>
        </div>

        <h1 className="font-headline text-3xl font-bold text-on-surface mb-2 tracking-tight">
          {isRegistering ? '创建新账号' : '欢迎回来'}
        </h1>
        <p className="text-on-surface-variant text-center mb-8 opacity-70">
          {isRegistering ? '加入翡翠聊天，开启沟通新体验' : '随时随地，与亲朋好友保持无缝连接'}
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
          <AnimatePresence mode="wait">
            {isRegistering && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="relative"
              >
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant opacity-50" />
                <input 
                  type="text" 
                  placeholder="用户名"
                  required
                  className="w-full h-14 pl-12 pr-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant opacity-50" />
            <input 
              type="email" 
              placeholder="电子邮箱"
              required
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant opacity-50" />
            <input 
              type="password" 
              placeholder="密码"
              required
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-lg ambient-shadow transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {isRegistering ? '立即注册' : '登录'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="text-center">
          <p className="text-on-surface-variant opacity-70 mb-2">
            {isRegistering ? '已有账号？' : '还没有账号？'}
          </p>
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-primary font-bold hover:underline"
          >
            {isRegistering ? '返回登录' : '立即注册'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
