import { GroupProps, useThree } from '@react-three/fiber'
import { VFC } from 'react'

import Item from './Item'

type Props = {
  m?: number
  urls: [string, string, string]
} & GroupProps

const Page: VFC<Props> = ({ m = 0.4, urls, ...props }) => {
  const { width } = useThree((state) => state.viewport)
  const w = width < 10 ? 1.5 / 3 : 1 / 3

  return (
    <group {...props}>
      <Item
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
      />
      <Item
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
      />
      <Item
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
      />
    </group>
  )
}

export default Page
