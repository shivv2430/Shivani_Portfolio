import React, { useState } from 'react'
import { Box, Text } from '@react-three/drei'
import useStore from '../store/useStore'

export default function Bookshelf(props) {
  const setActiveSection = useStore((state) => state.setActiveSection)
  const [hovered, setHover] = useState(false)

  return (
    <group
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) => {
        e.stopPropagation()
        setActiveSection('skills')
      }}
    >
      {/* Shelf */}
      <Box args={[2.5, 0.2, 1]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#5c3a21" />
      </Box>

      {/* Books */}
      <group position={[-1, 0.6, 0]}>
        <Box args={[0.3, 1, 0.8]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color={hovered ? '#e34c26' : '#cc4422'} /> {/* HTML orange */}
        </Box>
        <Box args={[0.3, 1.1, 0.8]} position={[0.4, 0.05, 0]} castShadow rotation={[0, 0, -0.1]}>
          <meshStandardMaterial color={hovered ? '#264de4' : '#1e3db3'} /> {/* CSS blue */}
        </Box>
        <Box args={[0.3, 0.9, 0.8]} position={[0.8, -0.05, 0]} castShadow>
          <meshStandardMaterial color={hovered ? '#f0db4f' : '#d4c246'} /> {/* JS yellow */}
        </Box>
        <Box args={[0.3, 1, 0.8]} position={[1.2, 0, 0]} castShadow>
          <meshStandardMaterial color={hovered ? '#61dafb' : '#4baabf'} /> {/* React blue */}
        </Box>
      </group>

      <Text position={[0, 1.5, 0.5]} fontSize={0.2} color={hovered ? '#1e3db3' : '#000'}>
        Skills
      </Text>
    </group>
  )
}
