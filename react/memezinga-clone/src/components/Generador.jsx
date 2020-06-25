import React, { Component } from 'react'
import Meme from './Meme'
import Form from './Form'

export default class Generador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoArriba: 'Texto 1',
      textoAbajo: 'Texto 2',
      color: '#000000',
      imgUrl: 'https://memezinga.osweekends.com/images/ronaldo.jpg',
    }
    this.handleChangeMeme = this.handleChangeMeme.bind(this);
  }

  handleChangeMeme(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Meme {...this.state} />
        <Form
          {...this.state}
          onHandleChangeMeme={this.handleChangeMeme}
        />
      </div>
    )
  }
}
