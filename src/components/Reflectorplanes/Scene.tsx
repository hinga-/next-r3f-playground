import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Suspense } from 'react'

import Rig from './Rig'
import Triangle from './Triangle'

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <Rig>
        <Triangle
          color="#ff2060"
          scale={0.005}
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 3]}
        />
        <Triangle
          color="cyan"
          scale={0.005}
          position={[2, 0, -2]}
          rotation={[0, 0, Math.PI / 3]}
        />
        <Triangle
          color="orange"
          scale={0.005}
          position={[-2, 0, -2]}
          rotation={[0, 0, Math.PI / 3]}
        />
        <Triangle
          color="white"
          scale={0.005}
          position={[0, 2, -10]}
          rotation={[0, 0, Math.PI / 3]}
        />
      </Rig>
      <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.6}
        />
        <Bloom
          kernelSize={5}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.5}
        />
      </EffectComposer>
    </Suspense>
  )
}

export default Scene
