import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Cpu, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

interface AIChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatBot({ isOpen, onClose }: AIChatBotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      content: "Hello! I am **Ibrahim's AI Double**, a digital representative trained directly on his bio, works, and artistic design philosophies. \n\nHow can I help you today? Feel free to ask about my skills, past projects, freelancing rates, or availability!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const presetQuestions = [
    'What is your core tech stack?',
    'What are your freelance rates?',
    'Are you available for full-time jobs?',
    'Tell me about Zenith Luxury project'
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Map history to simple format
      const historyToSend = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyToSend
        })
      });

      const data = await res.json();

      const modelMsg: ChatMessage = {
        id: `reply-${Date.now()}`,
        role: 'model',
        content: data.content || "I'm always ready to collaborate! Leave your details in the contact portal on the page so we can explore details.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        content: "Oops! My transmission connection fluctuated briefly. However, I can confirm that Ibrahim is a world-class creative developer. Send him a direct brief in the form on this page!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.95 }}
          transition={{ duration: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[85vh] z-50 rounded-3xl glass-card border border-white/10 flex flex-col overflow-hidden shadow-2xl"
          id="ai-chatbot-drawer"
        >
          {/* Header Panel */}
          <div className="p-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#cc9933]/10 border border-[#cc9933]/20 text-[#cc9933]">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-display font-bold text-white flex items-center gap-1.5">
                  Ibrahim AI Double <Sparkles className="w-3.5 h-3.5 text-[#cc9933]" />
                </div>
                <div className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full inline-block animate-ping" />
                  Gemini-3.5-Flash Active
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div
            ref={scrollRef}
            className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 no-scrollbar"
          >
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#cc9933] text-black font-medium rounded-tr-none'
                        : 'bg-white/5 border border-white/5 text-gray-300 rounded-tl-none font-light'
                    }`}
                  >
                    {/* Render basic custom bold markdown since we have rich responses */}
                    <div className="whitespace-pre-line font-sans">
                      {msg.content.split('**').map((chunk, i) => 
                        i % 2 === 1 ? <strong key={i} className="font-bold text-white">{chunk}</strong> : chunk
                      )}
                    </div>
                    <div
                      className={`text-[9px] mt-1 text-right ${
                        isUser ? 'text-black/50 font-mono' : 'text-gray-500 font-mono'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Simulated typing loading bubble */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 text-gray-400 rounded-2xl rounded-tl-none px-4 py-3 text-sm flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#cc9933]" />
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Preset Chips */}
          {messages.length === 1 && (
            <div className="px-5 py-3 border-t border-white/5 bg-black/40">
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 block mb-2">
                Click to Ask Instantly:
              </span>
              <div className="flex flex-wrap gap-2">
                {presetQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="text-[10px] font-sans px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 text-gray-300 hover:text-white transition-all cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Panel */}
          <div className="p-4 border-t border-white/10 bg-black/40">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Ibrahim about skills, rates..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#cc9933]/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-3 rounded-xl bg-white text-black hover:bg-[#f3e5ab] disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
