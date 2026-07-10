import React, { useRef, useState } from 'react'
import { Cone, Cylinder, Box, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useStore from '../store/useStore'

export default function Rocket(props) {
  const setActiveSection = useStore((state) => state.setActiveSection)
  const [hovered, setHover] = useState(false)
  const ref = useRef()

  useFrame((state) => {
    if (hovered && ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 5) * 0.1
    } else if (ref.current) {
      ref.current.position.y = 0
    }
  })

  return (
    <group
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) => {
        e.stopPropagation()
        setActiveSection('projects')
      }}
    >
      <group ref={ref}>
        {/* Rocket Body */}
        <Cylinder args={[0.3, 0.3, 1.5]} position={[0, 0.75, 0]} castShadow>
          <meshStandardMaterial color={hovered ? '##363334' : '#000'} />
        </Cylinder>

        {/* Rocket Nose */}
        <Cone args={[0.3, 0.6, 32]} position={[0, 1.8, 0]} castShadow>
          <meshStandardMaterial color={hovered ? '##a10330' : '#91042c'} />
        </Cone>

        {/* Rocket Fins */}
        <Box args={[0.1, 0.5, 0.8]} position={[0.3, 0.25, 0]} castShadow>
          <meshStandardMaterial color="#06B6D4" />
        </Box>
        <Box args={[0.8, 0.5, 0.1]} position={[0, 0.25, 0.3]} castShadow>
          <meshStandardMaterial color="#06B6D4" />
        </Box>
        <Box args={[0.8, 0.5, 0.1]} position={[0, 0.25, -0.3]} castShadow>
          <meshStandardMaterial color="#06B6D4" />
        </Box>
        <Box args={[0.1, 0.5, 0.8]} position={[-0.3, 0.25, 0]} castShadow>
          <meshStandardMaterial color="#06B6D4" />
        </Box>

        <Text position={[0, 2.3, 0]} fontSize={0.15} color={hovered ? '#91042c' : '#000'}>
          Projects
        </Text>
      </group>
    </group>
  )
}
