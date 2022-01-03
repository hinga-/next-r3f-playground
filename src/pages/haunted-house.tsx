import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Scene } from 'components/HauntedHouse'
import { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'

export const getStaticProps = async () => {
  return { props: { isDark: true } }
}

const HauntedHouse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Haunted House</title>
      </Head>
      <div className="canvas">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, Math.PI / 2, 10] }}
          shadows
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

export default HauntedHouse
