import { Image as DreiImage, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { BufferGeometry, Group, Mesh } from 'three'
import { DreiImageMaterial } from 'types'

const Images = () => {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef<Group>()

  useFrame(() => {
    if (group.current) {
      ;(
        group.current.children[0] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.zoom = 1 + data.range(0, 1 / 3) / 3
      ;(
        group.current.children[1] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.zoom = 1 + data.range(0, 1 / 3) / 3
      ;(
        group.current.children[2] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
      ;(
        group.current.children[2] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
      ;(
        group.current.children[3] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
      ;(
        group.current.children[3] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
      ;(
        group.current.children[4] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
      ;(
        group.current.children[4] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
      ;(
        group.current.children[5] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
      ;(
        group.current.children[5] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
      ;(
        group.current.children[6] as Mesh<BufferGeometry, DreiImageMaterial>
      ).material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
    }
  })

  return (
    <group ref={group}>
      <DreiImage
        position={[-2, 0, 0]}
        /* @ts-ignore */
        scale={[4, height, 1]}
        url="/images/1/1.jpg"
      />
      <DreiImage position={[2, 0, 1]} scale={3} url="/images/1/6.jpg" />
      <DreiImage
        position={[-2.3, -height, 2]}
        /* @ts-ignore */
        scale={[1, 3, 1]}
        url="/images/1/2.jpg"
      />
      <DreiImage
        position={[-0.6, -height, 3]}
        /* @ts-ignore */
        scale={[1, 2, 1]}
        url="/images/1/8.jpg"
      />
      <DreiImage
        position={[0.75, -height, 3.5]}
        scale={1.5}
        url="/images/1/4.jpg"
      />
      <DreiImage
        position={[0, -height * 1.5, 2.5]}
        /* @ts-ignore */
        scale={[1.5, 3, 1]}
        url="/images/1/3.jpg"
      />
      <DreiImage
        position={[0, -height * 2 - height / 4, 0]}
        /* @ts-ignore */
        scale={[width, height / 2, 1]}
        url="/images/1/7.jpg"
      />
    </group>
  )
}

export default Images
