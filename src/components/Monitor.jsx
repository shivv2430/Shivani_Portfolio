import React, { useRef, useState } from 'react'
import { Box, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useStore from '../store/useStore'

export default function Monitor(props) {
  const setActiveSection = useStore((state) => state.setActiveSection)
  const [hovered, setHover] = useState(false)

  return (
    <group
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) => {
        e.stopPropagation()
        setActiveSection('about')
      }}
    >
      {/* Monitor Stand */}
      <Box args={[0.8, 1, 0.5]} position={[0, 0.5, 0]} castShadow>
        <meshStandardMaterial color="#333" />
      </Box>

      {/* Monitor Screen */}
      <Box args={[3, 2, 0.2]} position={[0, 1.5, 0.1]} castShadow>
        <meshStandardMaterial color={hovered ? '#444' : '#222'} emissive={hovered ? '#06B6D4' : '#000'} emissiveIntensity={0.5} />
      </Box>

      {/* Screen Content */}
      <Text position={[0, 1.5, 0.22]} fontSize={0.2} color={hovered ? '#000' : '#06B6D4'}>
        {" About Me "}
      </Text>
    </group>
  )
}
