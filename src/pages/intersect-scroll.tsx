import { Canvas } from '@react-three/fiber'
import { Scene } from 'components/IntersectScroll'
import { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'

const IntersectScroll: NextPage = () => {
  return (
    <>
      <Head>
        <title>UseIntersect and scrollcontrols</title>
      </Head>
      <div className="canvas">
        <Canvas
          orthographic
          camera={{ zoom: 80 }}
          gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
          dpr={[1, 1.5]}
        >
          <color attach="background" args={['#f0f0f0']} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default IntersectScroll
