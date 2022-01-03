import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Scene as Reflectorplanes } from 'components/Reflectorplanes'
import type { NextPage } from 'next'
import Head from 'next/head'

export const getStaticProps = async () => {
  return { props: { isDark: true } }
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reflectorplanes and bloom</title>
        <meta
          name="description"
          content="Playing with reflections, bloom and camera-shake."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="canvas">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 30] }}>
          <color attach="background" args={['black']} />
          <ambientLight intensity={1} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Reflectorplanes />
        </Canvas>
      </div>
    </>
  )
}

export default Home
