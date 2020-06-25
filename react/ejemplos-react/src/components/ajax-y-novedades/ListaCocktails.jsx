import React, { Component, Fragment } from 'react'

export default class ListaCocktails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: []
    }
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then((resp) => {
        // console.log(resp)
        return resp.json()
      })
      .then((datos) => {
        // console.log(datos)
        this.setState({
          cocktails: datos.drinks
        })
      })
  }

  render() {
    const listaCocktails = this.state.cocktails.map(c => <li key={c.idDrink}>{c.strDrink}</li>)

    return (
      <Fragment>
        <h2>Lista cocktails con el nombre: margarita</h2>
        <ul>
          {listaCocktails}
        </ul>
      </Fragment>
    )
  }
}
