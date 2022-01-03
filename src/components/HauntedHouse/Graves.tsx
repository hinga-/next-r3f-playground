import { Euler, Vector3 } from '@react-three/fiber'
import { VFC } from 'react'

type Props = {
  count: number
}

const Graves: VFC<Props> = ({ count }) => {
  const graves = new Array(80).fill(0).map((_, i) => {
    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 6
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    const position: Vector3 = [x, 0.3, z]
    const rotation: Euler = [
      0,
      (Math.random() - 0.5) * 0.4,
      (Math.random() - 0.5) * 0.4,
    ]
    return (
      <mesh position={position} rotation={rotation} key={i} castShadow>
        <boxBufferGeometry args={[0.6, 0.8, 0.2]} />
        <meshStandardMaterial attach="material" color="#b2b6b1" />
      </mesh>
    )
  })

  return <group>{graves}</group>
}

export default Graves
