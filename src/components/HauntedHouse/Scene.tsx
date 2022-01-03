import { VFC } from 'react'

import Bushes from './Bushes'
import Floor from './Floor'
import Ghosts from './Ghosts'
import Graves from './Graves'
import House from './House'

type Props = {}

const Scene: VFC<Props> = () => {
  return (
    <>
      <color attach="background" args={['#262837']} />
      <fog attach="fog" args={['#262837', 1, 15]} />
      <ambientLight color={'#b9d5ff'} intensity={0.12} />
      {/* moon light */}
      <directionalLight
        color={'#b9d5ff'}
        intensity={0.12}
        position={[4, 5, -2]}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={15}
        castShadow
      />
      {/* door light */}
      <pointLight
        color={'#ff7d46'}
        intensity={1}
        distance={7}
        position={[0, 2.2, 2.7]}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
        castShadow
      />
      <Ghosts />
      <House
        door={{ position: [0, 1, 2.01], color: '#aa7b7b' }}
        walls={{ position: [0, 1.25, 0], color: '#ac8e82' }}
        roof={{
          position: [0, 3, 0],
          rotation: [0, Math.PI * 0.25, 0],
          color: '#b35f45',
        }}
      />
      <Bushes
        data={[
          {
            position: [0.8, 0.2, 2.2],
            scale: [0.5, 0.5, 0.5],
            color: '#89c854',
          },
          {
            position: [1.4, 0.1, 2.1],
            scale: [0.25, 0.25, 0.25],
            color: '#89c854',
          },
          {
            position: [-0.8, 0.1, 2.2],
            scale: [0.4, 0.4, 0.4],
            color: '#89c854',
          },
          {
            position: [-1, 0.05, 2.6],
            scale: [0.15, 0.15, 0.15],
            color: '#89c854',
          },
        ]}
      />
      <Graves count={50} />
      <Floor rotation={[-Math.PI * 0.5, 0, 0]} color={'#a9c388'} />
    </>
  )
}

export default Scene
