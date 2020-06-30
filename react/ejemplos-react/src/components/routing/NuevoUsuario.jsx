import React, { Component } from 'react'
import Componente from './Componente'
import { Prompt, Redirect } from 'react-router-dom'

export default class NuevoUsuario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datosGuardados: false
    }
    this.guardarDatos = this.guardarDatos.bind(this)
  }

  guardarDatos() {
    console.log('Guardando...')
    setTimeout(() => {
      this.setState({
        datosGuardados: true
      })
      // this.props.history.push('/')
    }, 1500)
  }

  render() {
    // console.log(this.props)

    return (
      <div>
        {this.state.datosGuardados ? <Redirect to="/usuarios" /> : null}
        <Prompt
          message={(location) => {
            if (!this.state.datosGuardados) {
              return "Are you sure you want to leave?"
            }
            return true;
          }}
        />
        <h1>Nuevo usuario</h1>
        <button type="button" onClick={this.guardarDatos}>Guardar</button>
        <Componente />
      </div>
    )
  }
}