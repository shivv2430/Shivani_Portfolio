import React from 'react'
import Scene from './components/Scene'
import OverlayManager from './components/OverlayManager'

function App() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-dark">
      <Scene />
      <OverlayManager />
      
      {/* Floating Video Player */}
      <div className="absolute bottom-4 right-4 z-[100] w-64 md:w-80 rounded-xl overflow-hidden shadow-2xl border border-white/20">
        <video 
          src="/web-d-video.mov" 
          controls 
          className="w-full h-auto"
          title="Portfolio Video"
        />
      </div>
    </div>
  )
}

export default App
