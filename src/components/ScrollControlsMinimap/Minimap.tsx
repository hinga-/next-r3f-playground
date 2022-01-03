import { PerspectiveCamera, useFBO } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, VFC } from 'react'
import {
  MeshBasicMaterial,
  PerspectiveCamera as Camera,
  sRGBEncoding,
} from 'three'

type Props = {}

const Minimap: VFC<Props> = () => {
  const { width, height } = useThree((state) => state.viewport)
  const fbo = useFBO(512, 512, { encoding: sRGBEncoding })
  const camera = useRef<Camera>()
  const [override] = useState(() => new MeshBasicMaterial({ color: '#777' }))

  useFrame((state) => {
    if (camera.current) {
      state.gl.setRenderTarget(fbo)
      state.scene.overrideMaterial = override
      state.gl.render(state.scene, camera.current)
      state.scene.overrideMaterial = null
      state.gl.setRenderTarget(null)
    }
  })

  return (
    <>
      <PerspectiveCamera position={[0, 0, 20]} fov={75} ref={camera} />
      <mesh position={[width / 6, height / 8, 3]}>
        <planeGeometry />
        <meshBasicMaterial transparent map={fbo.texture} />
      </mesh>
    </>
  )
}

export default Minimap
