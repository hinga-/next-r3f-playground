import { Image as DreiImage, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, VFC } from 'react'
import { BufferGeometry, Group, MathUtils, Mesh } from 'three'
import { DreiImageMaterial, DreiImageParams } from 'types'

type Props = JSX.IntrinsicElements['mesh'] & DreiImageParams

const Item: VFC<Props> = ({ ...props }) => {
  const group = useRef<Group>()
  const ref = useRef<Mesh<BufferGeometry, DreiImageMaterial>>()
  const data = useScroll()

  useFrame((_, delta) => {
    if (group.current) {
      group.current.position.z = MathUtils.damp(
        group.current.position.z,
        Math.max(0, data.delta * 50),
        4,
        delta
      )
    }
    if (ref.current) {
      ref.current.material.grayscale = MathUtils.damp(
        ref.current.material.grayscale || 0,
        Math.max(0, 1 - data.delta * 1000),
        4,
        delta
      )
    }
  })

  return (
    <group ref={group}>
      {/* @ts-ignore */}
      <DreiImage ref={ref} {...props} />
    </group>
  )
}

export default Item
