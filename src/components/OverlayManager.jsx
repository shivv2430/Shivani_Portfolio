import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../store/useStore'
import { X } from 'lucide-react'

// Placeholder UIs
import AboutUI from './AboutUI'

export default function OverlayManager() {
  const activeSection = useStore((state) => state.activeSection)
  const setActiveSection = useStore((state) => state.setActiveSection)

  return (
    <AnimatePresence>
      {activeSection && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        >
          <div className="relative glass-panel rounded-xl border border-gray-600/50 w-full max-w-4xl h-[80vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-600/50 bg-black/20">
              <h2 className="text-xl font-mono text-[#00FFB3] capitalize">{activeSection}</h2>
              <button
                onClick={() => setActiveSection(null)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {activeSection === 'about' && <AboutUI />}
              {activeSection === 'skills' && <div className="text-white text-center mt-20">Skills : <br /> <li>HTML</li> , <li>CSS</li> , <li>JavaScript</li> , <li>React (beginner)</li> , <li>C++</li> , <li>Python</li> , <li>Git/GitHub</li> , <li>API integration</li> , <li>Responsive web development</li> , <li>Open-source contribution</li> , and <li>Technical content creation</li> , actively building projects and sharing the learning journey publicly.</div>}
              {activeSection === 'projects' && <div className="text-white text-center mt-20">Projects : <br /> <li> Stranger Things(First project): https://shivv2430.github.io/StrangerThings/</li><li>Microsoft Learning Hub : https://shivv2430.github.io/Microsoft-Learning-Hub/</li></div>}
              {activeSection === 'achievements' && <div className="text-white text-center mt-20">Achievements : <br /> <li>GSSOC'26 contributor</li> , <br /> <li>built multiple web projects</li> , <br /> <li>Consistent on codechef (350+ problems solved, current streak : 80+ days)</li>, <br /> <li>Explore Open Source programs</li>  <br /> <li>Technical content creation</li> <br /> <li>Improving my technical and communication skills.</li> </div>}
              {activeSection === 'socials' && <div className="text-white text-center mt-20">Socials : <br /> <li>LinkedIn : https://www.linkedin.com/in/shivv2430/</li> <br /> <li>GitHub : https://github.com/shivv2430 </li> <br /> <li>Instagram : https://www.instagram.com/shivani.learns/</li> <br /> <li>Youtube : https://youtube.com/@shivani.learns?si=SJpT1kzh7uVKj93E</li> <br /> <li>Codechef : https://www.codechef.com/users/shivv2430</li> <br /> <li>Leetcode : https://leetcode.com/u/Shivanipal_3007/</li> <br /> <li>X : https://x.com/Shivv2430</li></div>}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
