import React, { Component } from 'react'
import CmpClase from './CmpClase'
import CmpFuncional from './CmpFuncional'
import CmpPropiedades from './CmpPropiedades'
import Contador from './Contador'
import ContadorSinEstado from './ContadorSinEstado'

export default class TiposDeComponentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0,
    }

    this.incrementar = this.incrementar.bind(this)
    this.decrementar = this.decrementar.bind(this)
  }

  incrementar(event) {
    console.log('Incrementar')

    this.setState({
      cuenta: this.state.cuenta + 1
    })

  }

  decrementar(event) {
    console.log('Decrementar')

    this.setState({
      cuenta: this.state.cuenta - 1
    })
  }

  render() {
    const msg1 = 'El canario está en la jaula...'

    return (
      <div>
        <CmpClase />
        <CmpFuncional />
        {/* <button type="submit"></button> */}
        <CmpPropiedades texto={msg1} />
        <CmpPropiedades texto="..." />
        <CmpPropiedades texto="Otro msg" />
        <Contador />
        <ContadorSinEstado
          cuenta={this.state.cuenta}
          onHandleIncrement={this.incrementar}
          onHandleDecrement={this.decrementar}
        />
        <CmpPropiedades texto={this.state.cuenta} />
      </div>
    )
  }
}
