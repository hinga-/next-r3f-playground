import { useFrame, useThree } from '@react-three/fiber'
import { ReactNode, useRef, VFC } from 'react'
import { Group, MathUtils, Vector3 } from 'three'

type Props = {
  children: ReactNode
}

const Rig: VFC<Props> = ({ children }) => {
  const ref = useRef<Group>()
  const vec3 = new Vector3()
  const { camera, mouse } = useThree()

  useFrame(() => {
    camera.position.lerp(vec3.set(mouse.x * 2, 0, 3.5), 0.05)
    if (ref.current) {
      ref.current.position.lerp(vec3.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
      ref.current.rotation.y = MathUtils.lerp(
        ref.current.rotation.y,
        (-mouse.x * Math.PI) / 20,
        0.1
      )
    }
  })

  return <group ref={ref}>{children}</group>
}

export default Rig
