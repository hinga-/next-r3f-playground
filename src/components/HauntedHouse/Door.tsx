import { Color, MeshProps, useLoader } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useRef, VFC } from 'react'
import { BufferAttribute, PlaneBufferGeometry, TextureLoader } from 'three'

type Props = {
  color: Color
} & MeshProps

const Door: VFC<Props> = ({ color = '#000', ...props }) => {
  const geo = useRef<PlaneBufferGeometry>()
  const [
    colorMap,
    alphaMap,
    aoMap,
    displacementMap,
    normalMap,
    roughnessMap,
    metalnessMap,
  ] = useLoader(TextureLoader, [
    '/images/haunted-house/textures/door/color.jpg',
    '/images/haunted-house/textures/door/alpha.jpg',
    '/images/haunted-house/textures/door/ambientOcclusion.jpg',
    '/images/haunted-house/textures/door/height.jpg',
    '/images/haunted-house/textures/door/normal.jpg',
    '/images/haunted-house/textures/door/roughness.jpg',
    '/images/haunted-house/textures/door/metalness.jpg',
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
    <mesh {...props}>
      <planeBufferGeometry ref={geo} args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        map={colorMap}
        alphaMap={alphaMap}
        aoMap={aoMap}
        displacementMap={displacementMap}
        displacementScale={0.1}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        metalnessMap={metalnessMap}
      />
    </mesh>
  )
}

export default Door
