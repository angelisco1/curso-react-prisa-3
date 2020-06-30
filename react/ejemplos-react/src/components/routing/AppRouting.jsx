import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Usuarios from './Usuarios'
import NuevoUsuario from './NuevoUsuario'
import Header from './Header'
import Error from './Error'

export default class AppRouting extends Component {
  render() {
    const isAdmin = false;
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/usuarios" component={Usuarios} />
          {/* {isAdmin ? <Route path="/nuevo-usuario" component={NuevoUsuario} /> : null} */}
          <Route path="/nuevo-usuario" component={NuevoUsuario} />
          {/* <Route path="/usuarios" component={InfoUsuario} />
          <Route path="/usuarios/:usuarioId" component={InfoUsuario} /> */}
          <Redirect to="/usuarios" from="/" exact />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    )
  }
}
