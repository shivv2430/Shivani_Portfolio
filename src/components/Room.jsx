import React from 'react'
import { Box } from '@react-three/drei'
import useStore from '../store/useStore'
import Monitor from './Monitor'
import Bookshelf from './Bookshelf'
import Rocket from './Rocket'
import Trophy from './Trophy'
import Portal from './Portal'
import Robot from './Robot'

export default function Room() {
  const isNightMode = useStore((state) => state.isNightMode)

  return (
    <group>
      {/* Floor */}
      <Box args={[10, 0.5, 10]} position={[0, -0.25, 0]} receiveShadow>
        <meshStandardMaterial color={isNightMode ? '#1e1e24' : '#f0f0f0'} />
      </Box>

      {/* Back Wall */}
      <Box args={[10, 5, 0.5]} position={[0, 2.5, -5.25]} receiveShadow>
        <meshStandardMaterial color={isNightMode ? '#2a2a35' : '#e0e0e0'} />
      </Box>

      {/* Side Wall */}
      <Box args={[0.5, 5, 10]} position={[-5.25, 2.5, 0]} receiveShadow>
        <meshStandardMaterial color={isNightMode ? '#2a2a35' : '#e0e0e0'} />
      </Box>
      
      {/* Basic Desk */}
      <Box args={[4, 0.2, 2]} position={[0, 1.5, -4]} castShadow receiveShadow>
        <meshStandardMaterial color="#8b5a2b" />
      </Box>
      <Box args={[0.2, 1.5, 2]} position={[-1.9, 0.75, -4]} castShadow receiveShadow>
        <meshStandardMaterial color="#5c3a21" />
      </Box>
      <Box args={[0.2, 1.5, 2]} position={[1.9, 0.75, -4]} castShadow receiveShadow>
        <meshStandardMaterial color="#5c3a21" />
      </Box>

      {/* Interactive Objects */}
      <Monitor position={[0, 1.6, -4]} />
      <Bookshelf position={[-3, 1.5, -5.1]} rotation={[0, 0, 0]} />
      <Rocket position={[2.5, 0.5, -3]} />
      <Trophy position={[-2.5, 0.5, -3]} />
      <Portal position={[3.5, 2, -1]} rotation={[0, -Math.PI / 4, 0]} />
      <Robot position={[-3, 2, 2]} />
    </group>
  )
}
