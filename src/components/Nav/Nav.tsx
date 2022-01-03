import Link from 'next/link'
import { VFC } from 'react'

import { data } from './data'

type Props = {}

const Nav: VFC<Props> = () => {
  return (
    <nav className="nav">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
