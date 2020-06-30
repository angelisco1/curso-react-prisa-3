import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/">Inicio</a> */}
          <NavLink to="/usuarios" exact>Inicio</NavLink>
        </li>
        <li>
          {/* <a href="/nuevo-usuario">Nuevo usuario</a> */}
          <NavLink to="/nuevo-usuario">Nuevo usuario</NavLink>
        </li>
        {/* <li>
          <Link to="/3">Usuario 3</Link>
        </li>
        <li>
          <Link to="/102">Usuario 102</Link>
        </li> */}
      </ul>
      {/* <a href='/no-existe' onClick={
        (e) => {
          e.preventDefault()
          // alert('Hoooo')
          window.history.pushState(null, null, e.target.href)
        }
      }>Enlace mio</a> */}
    </div>
  )
}

export default Header
