import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Usuarios from './Usuarios'
import NuevoUsuario from './NuevoUsuario'

export default class AppRouting extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Usuarios} />
        <Route path="/nuevo-usuario" component={NuevoUsuario} />
      </div>
    )
  }
}
