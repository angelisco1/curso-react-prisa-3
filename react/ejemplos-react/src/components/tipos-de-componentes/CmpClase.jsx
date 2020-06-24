import React from 'react';

class CmpClase extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props)
    this.state = {
      nombre: 'Angel'
    }
    this.saludar = this.saludar.bind(this);
  }

  saludar() {
    console.log('Hola ' + this.state.nombre)
  }

  render() {
    // this.saludar()
    return (
      <div>
        <p onClick={this.saludar}>Pulsa aquí</p>
        {/* <p onClick={() => this.saludar()}>Pulsa aquí</p> */}
      </div>
    )
  }
}

export default CmpClase;

// rcc