import { useAspect, useTexture } from '@react-three/drei'
import { VFC } from 'react'
import { LinearFilter } from 'three'

type Props = {}

const Background: VFC<Props> = () => {
  const texture = useTexture('/images/233.jpg')
  const size = useAspect(5000, 3800)

  return (
    <mesh layers={1} scale={size}>
      <planeGeometry />
      <meshBasicMaterial
        map={texture}
        map-minFilter={LinearFilter}
        depthTest={false}
      />
    </mesh>
  )
}

export default Background
