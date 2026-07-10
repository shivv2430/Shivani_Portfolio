import React, { useRef, useState } from 'react'
import { Cylinder, Sphere, Torus, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useStore from '../store/useStore'

export default function Trophy(props) {
  const setActiveSection = useStore((state) => state.setActiveSection)
  const [hovered, setHover] = useState(false)
  const ref = useRef()

  useFrame((state) => {
    if (hovered && ref.current) {
      ref.current.rotation.y += 0.05
    }
  })

  return (
    <group
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) => {
        e.stopPropagation()
        setActiveSection('achievements')
      }}
    >
      <group ref={ref}>
        {/* Base */}
        <Cylinder args={[0.3, 0.4, 0.2]} position={[0, 0.1, 0]} castShadow>
          <meshStandardMaterial color="#333" />
        </Cylinder>

        {/* Stem */}
        <Cylinder args={[0.05, 0.1, 0.5]} position={[0, 0.45, 0]} castShadow>
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
        </Cylinder>

        {/* Cup */}
        <Sphere args={[0.3, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} position={[0, 0.7, 0]} rotation={[Math.PI, 0, 0]} castShadow>
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} side={2} />
        </Sphere>

        {/* Handles */}
        <Torus args={[0.15, 0.02, 16, 32]} position={[-0.3, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
        </Torus>
        <Torus args={[0.15, 0.02, 16, 32]} position={[0.3, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
        </Torus>
      </group>

      <Text position={[0, 1.2, 0]} fontSize={0.159} color={hovered ? '#7C3AED' : '#000'}>
        Achievements
      </Text>
    </group>
  )
}
