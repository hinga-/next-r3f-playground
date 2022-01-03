import { Color, MeshProps } from '@react-three/fiber'
import { VFC } from 'react'

type Props = {
  color: Color
} & MeshProps

const Roof: VFC<Props> = ({ color, ...props }) => {
  return (
    <mesh {...props}>
      <coneBufferGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Roof
