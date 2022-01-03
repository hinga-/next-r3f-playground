import { Color } from '@react-three/fiber'
import { Material, Mesh, MeshStandardMaterial, Texture } from 'three'
import { GLTF } from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: Record<string, Mesh>
  materials: Record<string, MeshStandardMaterial>
}

export type DreiImageParams = {
  segments?: number
  scale?: number[]
  color?: Color
  zoom?: number
  grayscale?: number
  url: string
}

export type DreiImageMaterial = Material &
  Omit<DreiImageParams, 'url' | 'segments'> & {
    map: Texture
    imageBounds: number[]
  }
