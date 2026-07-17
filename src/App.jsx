import React from 'react'
import Scene from './components/Scene'
import OverlayManager from './components/OverlayManager'

function App() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-dark">
      <Scene />
      <OverlayManager />
    </div>
  )
}

export default App
