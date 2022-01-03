import { Color, MeshProps, useLoader } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useRef, VFC } from 'react'
import { BoxBufferGeometry, BufferAttribute, TextureLoader } from 'three'

type Props = {
  color: Color
} & MeshProps

const Walls: VFC<Props> = ({ color, ...props }) => {
  const geo = useRef<BoxBufferGeometry>()
  const [colorMap, aoMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    '/images/haunted-house/textures/bricks/color.jpg',
    '/images/haunted-house/textures/bricks/ambientOcclusion.jpg',
    '/images/haunted-house/textures/bricks/normal.jpg',
    '/images/haunted-house/textures/bricks/roughness.jpg',
  ])

  useEffect(() => {
    if (geo.current) {
      geo.current.setAttribute(
        'uv2',
        new BufferAttribute(geo.current.attributes.uv.array, 2)
      )
    }
  }, [])

  return (
    <mesh {...props} castShadow>
      <boxBufferGeometry ref={geo} args={[4, 2.5, 4]} />
      <meshStandardMaterial
        color={color}
        map={colorMap}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        normalMap={normalMap}
      />
    </mesh>
  )
}

export default Walls
