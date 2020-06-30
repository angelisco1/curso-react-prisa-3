import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log('Guardar los datos')


    // POST -> https://ejemplos-dc1c1.firebaseio.com/memes/tu-nombre.json
    // const miMeme = {
    //   textoArriba: textoArriba,
    //   textoAbajo: textoAbajo,
    //   color: color,
    //   imgUrl: imgUrl,
    // }
    // {body: JSON.stringify(miMeme)}

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
