import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import InfoUsuario from './InfoUsuario'

export default class Usuarios extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuarios: [
        {id: 1, nombre: 'Charly Falco'},
        {id: 57, nombre: 'Angel Villalba'},
        {id: 92, nombre: 'Kozinski'},
      ]
    }
  }

  render() {
    const listaUsuarios = this.state.usuarios.map(u => (
      <li key={u.id}>
        <Link to={{
          pathname: `${this.props.match.path}/${u.id}`,
          state: {nombre: u.nombre}
        }}>{u.nombre}</Link>
      </li>
    ))
    return (
      <div>
        <h1>Inicio</h1>
        {listaUsuarios}
        <hr/>
        {/* <Route path={`${this.props.match.path}/:usuarioId`} component={InfoUsuario} /> */}
        <Route path={`${this.props.match.path}/:usuarioId`} component={InfoUsuario} />
      </div>
    )
  }
}
