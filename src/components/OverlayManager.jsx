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
              {activeSection === 'skills' && <div className="text-red-300 text-center mt-20"> <span className='text-red-600 text-center mt-20 text-2xl'>Skills :</span> <br />  <br /> HTML <br /> <br /> CSS <br /> <br />JavaScript <br /> <br />React (beginner) <br /> <br />C++  <br /> <br />Git/GitHub <br /> <br /> Responsive web development  <br /> <br /> Open-source contribution <br /> <br /> Technical content creation  </div>}
              {activeSection === 'projects' && <div className="text-yellow-300 text-center mt-20"> <span className='text-yellow-600 text-center mt-20 text-2xl'> Projects : </span> <br /> <br /> Stranger Things(First project): https://shivv2430.github.io/StrangerThings/ <br /> <br /> Microsoft Learning Hub : https://shivv2430.github.io/Microsoft-Learning-Hub/ <br /><br /> IngreChef <br /><br /> Weather App <br /><br />counter <br /><br /> Age Calculator <br /><br /> Password Generator <br /><br />To-Do List <br /><br /> Calculator <br /><br /> </div>}
              {activeSection === 'achievements' && <div className="text-blue-300 text-center mt-20"> <span className='text-blue-600 text-center mt-20 text-2xl'>Achievements : </span><br />  <br />GSSOC'26 contributor<br /> <br /> Built multiple web projects<br />  <br /> Consistent on codechef (350+ problems solved, current streak : 80+ days)<br /> <br />Explore Open Source programs<br />  <br /> Technical content creation <br /> <br /> Improving my technical and communication skills. </div>}
              {activeSection === 'socials' && <div className="text-green-300 text-center mt-20"> <span className='text-green-600 text-center mt-20 text-2xl'>  Socials : </span><br /> <br />  LinkedIn : https://www.linkedin.com/in/shivv2430/ <br />  <br /> GitHub : https://github.com/shivv2430 <br /> <br />   Instagram : https://www.instagram.com/shivani.learns/ <br /> <br />   Youtube : https://youtube.com/@shivani.learns?si=SJpT1kzh7uVKj93E  <br />   <br />Codechef : https://www.codechef.com/users/shivv2430 <br />  <br />Leetcode : https://leetcode.com/u/Shivanipal_3007/ <br />  <br />X : https://x.com/Shivv2430 </div>}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
