import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

export default function AIAssistantUI() {
  const [activeTab, setActiveTab] = useState('welcome');

  const content = {
    welcome: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-white font-mono">
        <p>🤖 Hi! I'm Shivani's AI Assistant.</p>
        <p>Welcome to her interactive portfolio.</p>
        <p>I can help you explore this room.</p>

      </motion.div>
    ),
    about: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-white font-mono">
        <h3 className="text-[#00FFB3] text-xl mb-4">👩 About Shivani</h3>
        <p>Shivani is a second-year B.Tech student<br />at ABES Engineering College.</p>
        <p>She enjoys building web applications,<br />contributing to open source,<br />and creating educational tech content.</p>
        <p>She is currently learning React,<br />Three.js and Web development.</p>
      </motion.div>
    ),
    skills: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-white font-mono">
        <h3 className="text-[#00FFB3] text-xl mb-4">💻 Technical Skills</h3>
        <ul className="space-y-1 ml-2">
          <li>✔ HTML</li>
          <li>✔ CSS</li>
          <li>✔ JavaScript</li>
          <li>✔ React</li>
          <li>✔ Git</li>
          <li>✔ GitHub</li>
        </ul>
        <h4 className="text-yellow-300 mt-4">Currently Learning</h4>
        <ul className="space-y-1 ml-2">
          <li>• React Three Fiber</li>
          <li>• Three.js</li>
          <li>• APIs</li>
          <li>• UI Design</li>
        </ul>
      </motion.div>
    ),
    projects: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-white font-mono">
        <h3 className="text-[#00FFB3] text-xl mb-4"> Featured Projects</h3>
        <ol className="space-y-2 ml-4 list-decimal">
          <li>Interactive Portfolio</li>
          <li>Weather App</li>
          <li>Quote Generator</li>
          <li>Microsoft Learning Hub</li>
          <li>Todo App</li>
        </ol>

      </motion.div>
    ),
    achievements: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-white font-mono">
        <h3 className="text-[#00FFB3] text-xl mb-4">🏆 Achievements</h3>
        <ul className="space-y-2 ml-2">
          <li>• Open Source Contributor</li>
          <li>• Tech Content Creator</li>
          <li>• Multiple GitHub Projects</li>
          <li>• Building in Public</li>
        </ul>
      </motion.div>
    ),
    contact: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-white font-mono">
        <h3 className="text-[#00FFB3] text-xl mb-4">📞 Contact</h3>
        <p>Let's connect!</p>
        <ul className="space-y-3 mt-4">
          <li><a href="https://www.linkedin.com/in/shivv2430/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline">LinkedIn</a></li>
          <li><a href="https://github.com/shivv2430" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white underline">GitHub</a></li>
          <li><a href="https://youtube.com/@shivani.learns?si=SJpT1kzh7uVKj93E" target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-300 underline">YouTube</a></li>
          <li><a href="https://www.instagram.com/shivani.learns/" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-300 underline">Instagram</a></li>
          <li><a href="mailto:example@example.com" className="text-[#00FFB3] hover:text-white underline">Email</a></li>
        </ul>
      </motion.div>
    ),

  };

  const buttons = [
    { id: 'about', label: '👩 About Shivani' },
    { id: 'skills', label: '💻 Skills' },
    { id: 'projects', label: '🚀 Projects' },
    { id: 'achievements', label: '🏆 Achievements' },
    { id: 'contact', label: '📞 Contact' },
  ];

  return (
    <div className="flex flex-col md:flex-row h-full w-full gap-6 p-2">
      {/* Sidebar with buttons */}
      <div className="w-full md:w-1/3 flex flex-col gap-3">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveTab(btn.id)}
            className={`text-left px-4 py-3 rounded-lg border transition-all duration-300 font-mono text-sm ${activeTab === btn.id
              ? 'bg-[#00FFB3]/20 border-[#00FFB3] text-[#00FFB3]'
              : 'bg-black/30 border-gray-700 text-gray-300 hover:bg-black/50 hover:border-gray-500'
              }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-2/3 bg-black/40 border border-gray-700/50 rounded-xl p-6 relative overflow-y-auto">
        {activeTab !== 'welcome' && (
          <button
            onClick={() => setActiveTab('welcome')}
            className="absolute top-4 right-4 text-xs text-gray-400 hover:text-white"
          >
            Reset
          </button>
        )}
        <AnimatePresence mode="wait">
          {content[activeTab]}
        </AnimatePresence>
      </div>
    </div>
  );
}
