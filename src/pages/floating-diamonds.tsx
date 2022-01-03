import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Background, Diamonds } from 'components/FloatingDiamonds'
import { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'

const FloatingDiamonds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Floating diamonds</title>
      </Head>
      <div className="canvas">
        <Canvas linear flat camera={{ fov: 50, position: [0, 0, 50] }}>
          <Suspense fallback={null}>
            <Background />
            <Diamonds />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

export default FloatingDiamonds
