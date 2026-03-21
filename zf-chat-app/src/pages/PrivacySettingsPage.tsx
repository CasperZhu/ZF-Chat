import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Clock, User, Info, LayoutGrid, CheckCheck, Fingerprint, ChevronRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacySettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">隐私设置</h1>
        </div>
        <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <Search className="w-6 h-6 text-primary" />
        </button>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-8">
        <section>
          <h2 className="font-headline text-lg font-bold mb-4 px-2 text-primary">谁可以看到我的个人信息</h2>
          <div className="bg-surface-container rounded-3xl overflow-hidden flex flex-col gap-px">
            {[
              { icon: Clock, title: '上次在线时间', desc: '控制谁可以看到您的在线状态', value: '所有人' },
              { icon: User, title: '个人头像', desc: '选择可见您头像的用户范围', value: '我的联系人' },
              { icon: Info, title: '关于我', desc: '您的个人简介可见性', value: '所有人' },
              { icon: LayoutGrid, title: '状态', desc: '谁可以查看您的动态更新', value: '所有人' },
            ].map((item, index) => (
              <button key={index} className="flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-highest transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-on-surface">{item.title}</p>
                    <p className="text-xs text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-medium">{item.value}</span>
                  <ChevronRight className="w-5 h-5 text-outline-variant group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-headline text-lg font-bold mb-4 px-2 text-primary">高级安全与回执</h2>
          <div className="space-y-4">
            <div className="bg-surface-container-low p-6 rounded-3xl flex items-center justify-between ambient-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                  <CheckCheck className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-on-surface">已读回执</h3>
                  <p className="text-xs text-on-surface-variant max-w-[200px]">如果关闭，您将无法发送或接收已读回执。</p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-14 h-8 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all" />
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-3xl flex items-center justify-between ambient-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-on-surface">指纹锁</h3>
                  <p className="text-xs text-on-surface-variant max-w-[200px]">开启后，需使用指纹解锁 Emerald Chat。</p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-8 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all" />
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 py-6 bg-surface-container-highest/40 rounded-2xl border border-outline-variant/15">
          <div className="flex gap-3">
            <ShieldCheck className="w-5 h-5 text-tertiary shrink-0" />
            <p className="text-xs leading-relaxed text-on-surface-variant">
              您的隐私对我们至关重要。Emerald Chat 使用端到端加密保护您的所有对话和个人数据。调整这些设置将实时生效，您可以随时更改您的偏好。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
