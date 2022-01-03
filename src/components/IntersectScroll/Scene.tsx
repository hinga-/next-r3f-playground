import { ScrollControls } from '@react-three/drei'

import Content from './Content'

const Scene = () => {
  return (
    <ScrollControls damping={4} pages={5}>
      <Content />
    </ScrollControls>
  )
}

export default Scene
