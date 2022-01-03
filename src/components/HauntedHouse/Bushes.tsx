import { Color, MeshProps } from '@react-three/fiber'
import { VFC } from 'react'

type Bush = {
  color: Color
} & MeshProps

type Props = {
  data: Bush[]
}

const Bushes: VFC<Props> = ({ data }) => {
  return (
    <group>
      {data.map(({ color, ...meshProps }, index) => {
        return (
          <mesh key={index} {...meshProps} castShadow>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )
      })}
    </group>
  )
}

export default Bushes
