import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Images, Minimap } from 'components/ScrollControlsMinimap'
import { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'

const ScrollControlsMinimap: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scrollcontrols with minimap</title>
      </Head>
      <div className="canvas">
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ScrollControls damping={4} pages={3.2}>
              <Scroll>
                <Images />
              </Scroll>
              <Minimap />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default ScrollControlsMinimap
