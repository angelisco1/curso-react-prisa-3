import React, { Component } from 'react'
import ListaDatos from './ListaDatos';
import Formulario from './Formulario';

export default class ListasYFormularios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaSugus: [
        { id: 1, sabor: 'limón', color: 'yellow' },
        { id: 2, sabor: 'naranja', color: 'orange' },
        { id: 3, sabor: 'naranja', color: 'orange' },
      ],
      otraProp: false,
      otraMas: []
    }
  }

  render() {
    return (
      <div>
        <ListaDatos listaSugus={this.state.listaSugus} />
        {/* <ListaDatos miEstado={this.state} /> */}
        {/* <ListaDatos {...this.state} /> */}
        <Formulario />
      </div>
    )
  }
}
