import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Smartphone, Mail, Trash2, ChevronRight, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AccountSettingsPage() {
  const navigate = useNavigate();

  const sections = [
    { icon: Shield, title: '安全通知', desc: '在您的安全码更改时接收通知' },
    { icon: Smartphone, title: '更换手机号', desc: '将您的账号信息、群组及设置迁移至新手机号' },
    { icon: Mail, title: '邮箱地址', desc: '用于验证您的身份' },
    { icon: Trash2, title: '注销账号', desc: '永久删除您的账号及所有数据', variant: 'danger' },
    { icon: LogOut, title: '退出登录', desc: '退出当前账号', onClick: () => navigate('/') },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 glass-header flex items-center gap-4 px-8 py-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">账号</h1>
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
              onClick={item.onClick}
              className="flex items-center px-6 py-5 hover:bg-surface-container-low transition-colors cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-5 ${
                item.variant === 'danger' ? 'bg-error/10' : 'bg-secondary-container/30'
              }`}>
                <item.icon className={`w-6 h-6 ${
                  item.variant === 'danger' ? 'text-error' : 'text-secondary'
                }`} />
              </div>
              <div className="flex-1 border-b border-outline-variant/10 pb-1">
                <h3 className={`font-semibold ${item.variant === 'danger' ? 'text-error' : 'text-on-surface'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-on-surface-variant/70">{item.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-outline-variant" />
            </div>
          ))}
        </div>

        <p className="px-6 text-xs text-on-surface-variant/60 leading-relaxed">
          您的账号安全对我们至关重要。如果您怀疑账号存在风险，请立即联系支持团队。
        </p>
      </motion.main>
    </div>
  );
}
