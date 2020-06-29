import React, { Component, Fragment } from 'react'

export default class ListaCocktails extends Component {
  render() {
    const listaCocktails = this.props.datos.drinks.map(c => <li key={c.idDrink}>{c.strDrink}</li>)

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
