import { Image as DreiImage, useIntersect } from '@react-three/drei'
import { GroupProps, useFrame, useThree } from '@react-three/fiber'
import { useRef, VFC } from 'react'
import { BufferGeometry, MathUtils, Mesh } from 'three'
import { DreiImageMaterial } from 'types'

type Props = {
  url: string
  imageScale?: number[]
} & GroupProps

const Item: VFC<Props> = ({ url, imageScale, ...props }) => {
  const visible = useRef(false)
  const ref = useIntersect<Mesh<BufferGeometry, DreiImageMaterial>>(
    (isVisible) => (visible.current = isVisible)
  )
  const { height } = useThree((state) => state.viewport)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.y = MathUtils.damp(
        ref.current.position.y,
        visible.current ? 0 : -height / 2 + 1,
        8,
        delta
      )
      ref.current.material.zoom = MathUtils.damp(
        ref.current.material.zoom || 0,
        visible.current ? 1 : 1.5,
        4,
        delta
      )
    }
  })

  return (
    <group {...props}>
      {/* @ts-ignore */}
      <DreiImage ref={ref} scale={imageScale} url={url} />
    </group>
  )
}

export default Item
