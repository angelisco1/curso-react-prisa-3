import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Lista de memes</Link>
        </li>
        <li>
          <Link to="/generador">Generador</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
