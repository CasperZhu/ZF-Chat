import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Camera, Edit3, Palette, UserCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AvatarSettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 glass-header flex items-center gap-4 px-8 py-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <h1 className="font-headline font-bold text-2xl tracking-tight text-primary">个人虚拟形象</h1>
      </header>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 px-4 max-w-2xl mx-auto space-y-8"
      >
        {/* Current Avatar Preview */}
        <section className="flex flex-col items-center justify-center space-y-6 py-8">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/alex/400" 
                alt="Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute bottom-2 right-2 p-4 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform">
              <Camera className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center">
            <h2 className="font-headline font-bold text-2xl text-on-surface">Alex Rivera</h2>
            <p className="text-on-surface-variant opacity-70">您的虚拟形象将展示在对话和群组中</p>
          </div>
        </section>

        {/* Customization Options */}
        <div className="grid grid-cols-1 gap-4">
          <button className="flex items-center gap-5 p-6 bg-surface-container-lowest rounded-3xl ambient-shadow hover:bg-surface-container transition-colors text-left group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Edit3 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-on-surface">编辑形象</h3>
              <p className="text-xs text-on-surface-variant opacity-70">调整面部特征、发型和服饰</p>
            </div>
          </button>

          <button className="flex items-center gap-5 p-6 bg-surface-container-lowest rounded-3xl ambient-shadow hover:bg-surface-container transition-colors text-left group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-on-surface">风格与背景</h3>
              <p className="text-xs text-on-surface-variant opacity-70">选择不同的背景颜色和艺术风格</p>
            </div>
          </button>

          <button className="flex items-center gap-5 p-6 bg-surface-container-lowest rounded-3xl ambient-shadow hover:bg-surface-container transition-colors text-left group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-on-surface">AI 生成</h3>
              <p className="text-xs text-on-surface-variant opacity-70">使用 AI 为您生成独特的虚拟形象</p>
            </div>
          </button>
        </div>

        <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
          <div className="flex items-center gap-3 mb-2">
            <UserCircle className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-primary">提示</h4>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            定期更新您的虚拟形象可以让您的朋友们更容易在对话列表中找到您。
          </p>
        </div>
      </motion.main>
    </div>
  );
}
