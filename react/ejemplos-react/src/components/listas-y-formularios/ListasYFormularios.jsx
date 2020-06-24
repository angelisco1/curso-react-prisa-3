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
      ]
    }
  }

  render() {
    return (
      <div>
        <ListaDatos datos={this.state.listaSugus} />
        <Formulario />
      </div>
    )
  }
}
