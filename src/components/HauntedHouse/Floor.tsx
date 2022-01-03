import { Color, MeshProps, useLoader } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useRef, VFC } from 'react'
import {
  BufferAttribute,
  PlaneBufferGeometry,
  RepeatWrapping,
  TextureLoader,
} from 'three'

type Props = {
  color: Color
} & MeshProps

const Floor: VFC<Props> = ({ color = '#000', ...props }) => {
  const geo = useRef<PlaneBufferGeometry>()
  const [colorMap, aoMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    '/images/haunted-house/textures/grass/color.jpg',
    '/images/haunted-house/textures/grass/ambientOcclusion.jpg',
    '/images/haunted-house/textures/grass/normal.jpg',
    '/images/haunted-house/textures/grass/roughness.jpg',
  ])

  colorMap.repeat.set(8, 8)
  colorMap.wrapS = RepeatWrapping
  colorMap.wrapT = RepeatWrapping
  aoMap.repeat.set(8, 8)
  aoMap.wrapS = RepeatWrapping
  aoMap.wrapT = RepeatWrapping
  normalMap.repeat.set(8, 8)
  normalMap.wrapS = RepeatWrapping
  normalMap.wrapT = RepeatWrapping
  roughnessMap.repeat.set(8, 8)
  roughnessMap.wrapS = RepeatWrapping
  roughnessMap.wrapT = RepeatWrapping

  useEffect(() => {
    if (geo.current) {
      geo.current.setAttribute(
        'uv2',
        new BufferAttribute(geo.current.attributes.uv.array, 2)
      )
    }
  }, [])

  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry ref={geo} args={[20, 20]} />
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

export default Floor
