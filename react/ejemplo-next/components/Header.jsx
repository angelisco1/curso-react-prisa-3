import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre-mi">
            <a>Sobre mi</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemons">
            <a>Pokemons</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
