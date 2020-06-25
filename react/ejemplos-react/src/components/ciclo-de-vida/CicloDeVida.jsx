import React, { Component } from 'react'
import CajaColor from './CajaColor';

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letra: 'a',
      mostrarCaja: true
    }
  }

  render() {
    const { letra, mostrarCaja } = this.state;

    return (
      <div>
        <input
          type="text"
          value={letra}
          onChange={(e) => {
            this.setState({letra: e.target.value.split('')[1]})
          }}
        />
        <button
          type="button"
          onClick={() => {
            this.setState({mostrarCaja: !mostrarCaja})
          }}
        >Toggle Caja: {mostrarCaja ? 'se muestra' :  'no se muestra'}</button>

        {mostrarCaja ? <CajaColor letra={letra} /> : null}
      </div>
    )
  }
}
