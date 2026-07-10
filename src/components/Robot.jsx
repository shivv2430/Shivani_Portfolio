import React, { useRef, useState } from 'react'
import { Sphere, Cylinder, Box, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useStore from '../store/useStore'

export default function Robot(props) {
  const setActiveSection = useStore((state) => state.setActiveSection)
  const [hovered, setHover] = useState(false)
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2 + 2
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <group 
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) => {
        e.stopPropagation()
        // Here we could trigger a specific AI chat overlay instead of section
        // For now we'll just alert or trigger a section
        setActiveSection('ai_assistant')
      }}
    >
      <group ref={ref}>
        {/* Robot Head */}
        <Sphere args={[0.4, 32, 32]} castShadow>
          <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
        </Sphere>
        
        {/* Robot Eyes */}
        <Box args={[0.15, 0.05, 0.1]} position={[-0.15, 0.1, 0.35]}>
          <meshStandardMaterial color={hovered ? '#00FFB3' : '#06B6D4'} emissive={hovered ? '#00FFB3' : '#06B6D4'} emissiveIntensity={2} />
        </Box>
        <Box args={[0.15, 0.05, 0.1]} position={[0.15, 0.1, 0.35]}>
          <meshStandardMaterial color={hovered ? '#00FFB3' : '#06B6D4'} emissive={hovered ? '#00FFB3' : '#06B6D4'} emissiveIntensity={2} />
        </Box>
        
        {/* Robot Antenna */}
        <Cylinder args={[0.02, 0.02, 0.3]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#7C3AED" />
        </Cylinder>
        <Sphere args={[0.08]} position={[0, 0.65, 0]}>
          <meshStandardMaterial color={hovered ? '#00FFB3' : '#7C3AED'} emissive={hovered ? '#00FFB3' : '#7C3AED'} emissiveIntensity={1} />
        </Sphere>
      </group>
    </group>
  )
}
