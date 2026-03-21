import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Video, Phone, MoreVertical, Smile, Paperclip, Camera, Mic, Play, CheckCheck } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_MESSAGES, MOCK_CHATS } from '../constants';
import { cn } from '../utils/cn';

export default function ChatConversationPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const chat = MOCK_CHATS.find(c => c.id === id) || MOCK_CHATS[0];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header flex items-center justify-between px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <img 
                src={chat.avatar || `https://picsum.photos/seed/${chat.id}/100`} 
                alt={chat.name} 
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary border-2 border-surface rounded-full" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-primary tracking-tight">{chat.name}</span>
              <span className="text-[10px] font-medium opacity-70">{chat.online ? '在线' : '离线'}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Video className="w-6 h-6 text-primary" />
          </button>
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <Phone className="w-6 h-6 text-primary" />
          </button>
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <MoreVertical className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 chat-bg-pattern pt-24 pb-28 px-4 md:px-20 lg:px-64 flex flex-col gap-4 overflow-y-auto">
        <div className="flex justify-center my-4">
          <span className="bg-surface-container text-on-surface-variant px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">今天</span>
        </div>

        {MOCK_MESSAGES.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={cn(
              "flex flex-col max-w-[85%] md:max-w-[70%]",
              msg.isOutgoing ? "self-end items-end" : "items-start"
            )}
          >
            <div className={cn(
              "px-4 py-3 rounded-2xl message-shadow",
              msg.isOutgoing 
                ? "bg-primary-container text-on-primary-container rounded-tr-sm" 
                : "bg-surface-container-highest text-on-surface rounded-tl-sm",
              msg.image && "p-1"
            )}>
              {msg.image && (
                <img 
                  src={msg.image} 
                  alt="Attachment" 
                  className="rounded-xl mb-2 w-full max-h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              
              {msg.audio ? (
                <div className="flex items-center gap-3 min-w-[200px]">
                  <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center">
                    <Play className="w-5 h-5 fill-current" />
                  </button>
                  <div className="flex-1 h-1 bg-outline-variant rounded-full relative">
                    <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full" />
                  </div>
                  <span className="text-[10px] font-medium opacity-60">{msg.duration}</span>
                </div>
              ) : (
                <p className="text-sm leading-relaxed">{msg.text}</p>
              )}

              <div className={cn(
                "flex items-center gap-1 mt-1",
                msg.isOutgoing ? "justify-end" : "justify-start"
              )}>
                <span className="text-[10px] font-medium opacity-60">{msg.time}</span>
                {msg.isOutgoing && msg.status === 'read' && (
                  <CheckCheck className="w-3 h-3 text-primary" />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Input Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-surface/95 backdrop-blur-sm p-4 md:px-20 lg:px-64">
        <div className="flex items-end gap-2">
          <div className="flex-1 bg-surface-container-highest rounded-3xl px-4 py-2 flex items-center gap-2 focus-within:bg-surface-container-lowest focus-within:ambient-shadow transition-all">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <Smile className="w-6 h-6" />
            </button>
            <textarea 
              placeholder="输入消息" 
              rows={1}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 resize-none"
            />
            <button className="text-on-surface-variant hover:text-primary transition-colors rotate-45">
              <Paperclip className="w-6 h-6" />
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <Camera className="w-6 h-6" />
            </button>
          </div>
          <button className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform">
            <Mic className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
