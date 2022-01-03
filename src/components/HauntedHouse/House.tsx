import { ComponentProps, VFC } from 'react'

import Door from './Door'
import Roof from './Roof'
import Walls from './Walls'

type Props = {
  walls: ComponentProps<typeof Walls>
  door: ComponentProps<typeof Door>
  roof: ComponentProps<typeof Roof>
}

const House: VFC<Props> = ({ roof, door, walls }) => {
  return (
    <group>
      <Roof {...roof} />
      <Door {...door} />
      <Walls {...walls} />
    </group>
  )
}

export default House
