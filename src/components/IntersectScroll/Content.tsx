import { Scroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { VFC } from 'react'

import Item from './Item'

type Props = {}

const Content: VFC<Props> = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <Scroll>
      <Item
        url="/images/1/1.jpg"
        imageScale={[w / 3, w / 3, 1]}
        position={[-w / 6, 0, 0]}
      />
      <Item
        url="/images/1/2.jpg"
        imageScale={[2, w / 3, 1]}
        position={[w / 30, -h, 0]}
      />
      <Item
        url="/images/1/3.jpg"
        imageScale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        url="/images/1/4.jpg"
        imageScale={[w / 5, w / 5, 1]}
        position={[w / 4, -h * 1.2, 0]}
      />
      <Item
        url="/images/1/5.jpg"
        imageScale={[w / 5, w / 5, 1]}
        position={[w / 10, -h * 1.75, 0]}
      />
      <Item
        url="/images/1/6.jpg"
        imageScale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url="/images/1/7.jpg"
        imageScale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 2.6, 0]}
      />
      <Item
        url="/images/1/8.jpg"
        imageScale={[w / 2, w / 2, 1]}
        position={[w / 4, -h * 3.1, 0]}
      />
      <Item
        url="/images/1/12.jpg"
        imageScale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
    </Scroll>
  )
}

export default Content
