import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, Image, Archive, Trash2, ChevronRight, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChatSettingsPage() {
  const navigate = useNavigate();

  const sections = [
    { icon: Sun, title: '主题', desc: '系统默认' },
    { icon: Image, title: '对话壁纸', desc: '更改所有对话的背景' },
    { icon: Archive, title: '存档所有对话', desc: '将所有对话移至存档' },
    { icon: Trash2, title: '删除所有对话', desc: '永久删除所有消息记录', variant: 'danger' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 glass-header flex items-center gap-4 px-8 py-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">对话设置</h1>
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

        <div className="bg-surface-container-lowest rounded-3xl p-6 ambient-shadow space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-on-surface">回车键发送消息</h3>
              <p className="text-xs text-on-surface-variant/70">回车键将直接发送消息，而不是换行</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-on-surface">媒体可见性</h3>
              <p className="text-xs text-on-surface-variant/70">在手机相册中显示新下载的媒体文件</p>
            </div>
            <div className="w-12 h-6 bg-outline-variant/30 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
