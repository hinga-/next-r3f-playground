import { useFrame, useThree } from '@react-three/fiber'
import { useRef, VFC } from 'react'
import { PointLight } from 'three'

type Props = {}

const Ghosts: VFC<Props> = () => {
  const ghost1 = useRef<PointLight>()
  const ghost2 = useRef<PointLight>()
  const ghost3 = useRef<PointLight>()
  const { clock } = useThree()

  useFrame(() => {
    const time = clock.getElapsedTime()

    if (ghost1.current) {
      const angle = time * 0.5
      ghost1.current.position.x = Math.cos(angle) * 4
      ghost1.current.position.z = Math.sin(angle) * 4
      ghost1.current.position.y = Math.sin(time * 3)
    }

    if (ghost2.current) {
      const angle = -time * 0.32
      ghost2.current.position.x = Math.cos(angle) * 5
      ghost2.current.position.z = Math.sin(angle) * 5
      ghost2.current.position.y = Math.sin(time * 4) + Math.sin(time * 2.5)
    }

    if (ghost3.current) {
      const angle = -time * 0.18
      ghost3.current.position.x = Math.cos(angle) * (7 + Math.sin(time * 0.32))
      ghost3.current.position.z = Math.sin(angle) * (7 + Math.sin(time * 0.5))
      ghost3.current.position.y = Math.sin(time * 4) + Math.sin(time * 2.5)
    }
  })

  return (
    <>
      <pointLight
        ref={ghost1}
        color={'#ff00ff'}
        intensity={2}
        distance={3}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
        castShadow
      />
      <pointLight
        ref={ghost2}
        color={'#00ffff'}
        intensity={2}
        distance={3}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
        castShadow
      />
      <pointLight
        ref={ghost3}
        color={'#ffff00'}
        intensity={2}
        distance={3}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
        castShadow
      />
    </>
  )
}

export default Ghosts
