import { useThree } from '@react-three/fiber'
import { VFC } from 'react'

import Page from './Page'

type Props = {}

const Pages: VFC<Props> = () => {
  const { width } = useThree((state) => state.viewport)

  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={[
          '/images/2/trip1.jpg',
          '/images/2/trip2.jpg',
          '/images/2/trip3.jpg',
        ]}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={[
          '/images/2/img1.jpg',
          '/images/2/img2.jpg',
          '/images/2/img3.jpg',
        ]}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={[
          '/images/2/img4.jpg',
          '/images/2/img5.jpg',
          '/images/2/img6.jpg',
        ]}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={[
          '/images/2/trip1.jpg',
          '/images/2/trip2.jpg',
          '/images/2/trip3.jpg',
        ]}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={[
          '/images/2/img1.jpg',
          '/images/2/img2.jpg',
          '/images/2/img3.jpg',
        ]}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={[
          '/images/2/img4.jpg',
          '/images/2/img5.jpg',
          '/images/2/img6.jpg',
        ]}
      />
    </>
  )
}

export default Pages
