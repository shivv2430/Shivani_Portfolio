import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import Room from './Room'
import useStore from '../store/useStore'

export default function Scene() {
  const isNightMode = useStore((state) => state.isNightMode)

  return (
    <Canvas
      shadows
      camera={{ position: [0, 4, 8], fov: 50 }}
      className="w-full h-full"
    >
      <color attach="background" args={[isNightMode ? '#050505' : '#87CEEB']} />
      
      <ambientLight intensity={isNightMode ? 0.2 : 0.6} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={isNightMode ? 0.5 : 1} 
        castShadow 
      />
      
      {isNightMode && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
      
      <Suspense fallback={null}>
        <Room />
        <Environment preset={isNightMode ? 'night' : 'city'} />
      </Suspense>

      <OrbitControls 
        makeDefault 
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 2.1} 
        minDistance={3}
        maxDistance={12}
      />
    </Canvas>
  )
}
