import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log('Guardar los datos')
    const { textoArriba, textoAbajo, color, imgUrl } = this.props;

    // const meme = {
    //   textoArriba: textoArriba,
    //   textoAbajo: textoAbajo,
    //   color: color,
    //   imgUrl: imgUrl,
    // }
    const meme = {
      textoArriba,
      textoAbajo,
      color,
      imgUrl,
    }

    fetch('https://ejemplos-dc1c1.firebaseio.com/memes/angel.json', {
      method: 'POST',
      body: JSON.stringify(meme)
    })
      .then(resp => resp.json())
      .then(datos => {
        console.log(datos)
        this.props.history.push('/')
      })

  }

  render() {
    const { textoArriba, textoAbajo, color, onHandleChangeMeme } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="textoArriba">Texto arriba:</label>
            <input
              type="text"
              id="textoArriba"
              name="textoArriba"
              value={textoArriba}
              onChange={onHandleChangeMeme}
            />
          </div>
          <div>
            <label htmlFor="textoAbajo">Texto abajo:</label>
            <input
              type="text"
              id="textoAbajo"
              name="textoAbajo"
              value={textoAbajo}
              onChange={onHandleChangeMeme}
            />
          </div>
          <div>
            <label htmlFor="color">Color:</label>
            <input
              type="color"
              id="color"
              name="color"
              value={color}
              onChange={onHandleChangeMeme}
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Form)