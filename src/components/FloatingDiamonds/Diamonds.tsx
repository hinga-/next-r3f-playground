import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { InstancedMesh, Object3D, WebGLRenderTarget } from 'three'
import { GLTFResult } from 'types'

import BackfaceMaterial from './BackfaceMaterial'
import RefractionMaterial from './RefractionMaterial'

const Diamonds = () => {
  const { size, viewport, gl, scene, camera, clock } = useThree()
  const model = useRef<InstancedMesh>()
  const { nodes } = useGLTF('/models/diamond.glb') as GLTFResult

  // Create Fbo's and materials
  const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] =
    useMemo(() => {
      const envFbo = new WebGLRenderTarget(size.width, size.height)
      const backfaceFbo = new WebGLRenderTarget(size.width, size.height)
      const backfaceMaterial = new BackfaceMaterial()
      const refractionMaterial = new RefractionMaterial({
        envMap: envFbo.texture,
        backfaceMap: backfaceFbo.texture,
        resolution: [size.width, size.height],
      })
      return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial]
    }, [size])

  // Create random position data
  const dummy = useMemo(() => new Object3D(), [])
  const diamonds = useMemo(
    () =>
      new Array(80).fill(null).map((_, i) => ({
        position: [
          i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width,
          40 - Math.random() * 40,
          i < 5 ? 26 : 10 - Math.random() * 20,
        ],
        factor: 0.1 + Math.random(),
        direction: Math.random() < 0.5 ? -1 : 1,
        rotation: [
          Math.sin(Math.random()) * Math.PI,
          Math.sin(Math.random()) * Math.PI,
          Math.cos(Math.random()) * Math.PI,
        ],
      })),
    [viewport]
  )

  useFrame(() => {
    if (model.current) {
      diamonds.forEach((data, i) => {
        const t = clock.getElapsedTime()
        data.position[1] -= (data.factor / 5) * data.direction
        if (
          data.direction === 1 ? data.position[1] < -50 : data.position[1] > 50
        )
          data.position = [
            i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width,
            50 * data.direction,
            data.position[2],
          ]
        const { position, rotation, factor } = data
        dummy.position.set(position[0], position[1], position[2])
        dummy.rotation.set(
          rotation[0] + t * factor,
          rotation[1] + t * factor,
          rotation[2] + t * factor
        )
        dummy.scale.set(1 + factor, 1 + factor, 1 + factor)
        dummy.updateMatrix()
        model.current && model.current.setMatrixAt(i, dummy.matrix)
      })
      model.current.instanceMatrix.needsUpdate = true

      // Render env to fbo
      gl.autoClear = false
      camera.layers.set(1)
      gl.setRenderTarget(envFbo)
      gl.render(scene, camera)
      // Render cube backfaces to fbo
      camera.layers.set(0)
      model.current.material = backfaceMaterial
      gl.setRenderTarget(backfaceFbo)
      gl.clearDepth()
      gl.render(scene, camera)
      // Render env to screen
      camera.layers.set(1)
      gl.setRenderTarget(null)
      gl.render(scene, camera)
      gl.clearDepth()
      // Render cube with refraction material to screen
      camera.layers.set(0)
      model.current.material = refractionMaterial
      gl.render(scene, camera)
    }
  }, 1)

  return (
    <instancedMesh
      ref={model}
      args={[nodes.Cylinder.geometry, undefined, diamonds.length]}
    >
      <meshBasicMaterial />
    </instancedMesh>
  )
}

export default Diamonds
