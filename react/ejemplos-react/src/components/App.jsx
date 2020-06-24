import React, { Component } from 'react'
import TiposDeComponentes from './tipos-de-componentes/TiposDeComponentes'
import ListasYFormularios from './listas-y-formularios/ListasYFormularios';

export default class App extends Component {
  render() {
    let nombre = 'Ángel';
    let styles = {
      textDecoration: 'underline'
    }

    return (
      <div>
        {/* <h1>HolaÑ {nombre}!</h1>
        <p style={styles}>Un párrafo</p> */}
        {/* <TiposDeComponentes /> */}
        <ListasYFormularios />
      </div>
    )
  }
}