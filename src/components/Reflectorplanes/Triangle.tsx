import { MeshProps, useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState, VFC } from 'react'
import { ColorRepresentation, Group } from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

type Props = {
  color: ColorRepresentation
} & MeshProps

const Triangle: VFC<Props> = ({ color, ...props }) => {
  const ref = useRef<Group>()
  const [random] = useState(() => Math.random() * 10000)
  const {
    paths: [path],
  } = useLoader(SVGLoader, '/triangle.svg')
  const geom = useMemo(
    () =>
      SVGLoader.pointsToStroke(
        path.subPaths[0].getPoints(),
        path.userData?.style
      ),
    [path.subPaths, path.userData?.style]
  )

  useFrame((store) => {
    if (ref.current) {
      ref.current.position.y =
        -1.75 + Math.sin(store.clock.elapsedTime + random) / 10
    }
  })

  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}

export default Triangle
