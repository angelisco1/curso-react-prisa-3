import React, { Component } from 'react'

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 2,
      // nombreContador: ''
    }

    this.incrementar = this.incrementar.bind(this)
    this.decrementar = this.decrementar.bind(this)
    // this.cambiarCuenta = this.cambiarCuenta.bind(this)
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

  // cambiarCuenta(event) {
  //   switch(event.target.innerText) {
  //     case '-':
  //       this.decrementar()
  //       break;
  //     case '+':
  //       this.incrementar();
  //       break;
  //   }
  // }

  render() {
    return (
      // <div onClick={this.cambiarCuenta}>
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <span>Cuenta: {this.state.cuenta}</span>
        <button type="button" onClick={this.incrementar}>+</button>
      </div>
    )
  }
}
