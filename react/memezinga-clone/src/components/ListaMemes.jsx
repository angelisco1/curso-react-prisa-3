import React, { Component } from 'react'
import Meme from './Meme'

export default class ListaMemes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listaMemes: []
    }
  }

  componentDidMount() {
    fetch('https://ejemplos-dc1c1.firebaseio.com/memes/angel.json')
      .then(resp => resp.json())
      .then(datos => {
        const memes = []

        for (const id in datos) {
          memes.push({id: id, ...datos[id]})
        }

        this.setState({
          listaMemes: memes
        })
      })
  }

  render() {
    const memes = this.state.listaMemes.map(meme => (
      <Meme key={meme.id} {...meme} />
    ))
    return (
      <div>
        <h1>Lista memes</h1>
        <hr/>
        <div>
          {memes}
        </div>
      </div>
    )
  }
}
