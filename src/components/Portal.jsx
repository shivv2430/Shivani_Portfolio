import React, { useRef, useState } from 'react'
import { Torus, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useStore from '../store/useStore'

export default function Portal(props) {
  const setActiveSection = useStore((state) => state.setActiveSection)
  const [hovered, setHover] = useState(false)
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z -= 0.02
      if (hovered) {
        ref.current.rotation.z -= 0.05
        ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 10) * 0.05)
      } else {
        ref.current.scale.setScalar(1)
      }
    }
  })

  return (
    <group
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) => {
        e.stopPropagation()
        setActiveSection('socials')
      }}
    >
      <group ref={ref}>
        {/* Outer Ring */}
        <Torus args={[1, 0.1, 16, 100]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={2} />
        </Torus>

        {/* Inner Ring */}
        <Torus args={[0.8, 0.05, 16, 100]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#00FFB3" emissive="#00FFB3" emissiveIntensity={1} />
        </Torus>
      </group>

      <Text position={[0, 1.5, 0]} fontSize={0.2} color={hovered ? '#7C3AED' : '#000'}>
        Socials
      </Text>
    </group>
  )
}
