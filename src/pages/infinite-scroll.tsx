import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Pages } from 'components/InfiniteScroll'
import { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'

export const getStaticProps = async () => {
  return { props: { isDark: true } }
}

const InfiniteScroll: NextPage = () => {
  return (
    <>
      <Head>
        <title>Infinite scroll</title>
      </Head>
      <div className="canvas">
        <Canvas
          orthographic
          camera={{ zoom: 80 }}
          gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <ScrollControls
              infinite
              horizontal
              damping={4}
              pages={4}
              distance={1}
            >
              <Scroll>
                <Pages />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default InfiniteScroll
