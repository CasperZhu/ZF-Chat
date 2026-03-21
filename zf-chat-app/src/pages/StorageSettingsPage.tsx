import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Database, HardDrive, Wifi, Image, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StorageSettingsPage() {
  const navigate = useNavigate();

  const sections = [
    { icon: HardDrive, title: '管理存储空间', desc: '查看并清理已使用的空间' },
    { icon: Wifi, title: '网络使用情况', desc: '查看发送和接收的数据量' },
    { icon: Image, title: '媒体自动下载', desc: '移动数据、Wi-Fi' },
    { icon: FileText, title: '文档自动下载', desc: 'Wi-Fi' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 glass-header flex items-center gap-4 px-8 py-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">存储和数据</h1>
      </header>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 px-4 max-w-2xl mx-auto space-y-6"
      >
        {/* Storage Usage Hero */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 ambient-shadow space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-on-surface">存储空间使用情况</h3>
            <span className="text-sm font-bold text-primary">1.2 GB / 64 GB</span>
          </div>
          <div className="w-full h-3 bg-outline-variant/20 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[15%]"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-xs text-on-surface-variant">Emerald Chat (180 MB)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-outline-variant/40"></div>
              <span className="text-xs text-on-surface-variant">其他应用 (1.02 GB)</span>
            </div>
          </div>
        </section>

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

        <div className="bg-surface-container-lowest rounded-3xl p-6 ambient-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-on-surface">使用少量数据进行通话</h3>
              <p className="text-xs text-on-surface-variant/70">降低通话质量以节省流量</p>
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
