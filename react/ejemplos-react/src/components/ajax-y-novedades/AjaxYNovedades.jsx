import React, { Component } from 'react'
import ListaCocktails from './ListaCocktails'
import Sugus from '../listas-y-formularios/Sugus'
import { withHover } from './withHover'
import ListaCocktailsSinDatos from './ListaCocktailsSinDatos'
import { withData } from './withData'
import CajaDarkMode from './CajaDarkMode'
import Card from './Card'

const MiLoader = () => {
  return <marquee>Loading...</marquee>
}

export const ctxDarkMode = React.createContext(true);

export default class AjaxYNovedades extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: true
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode })
  }

  render() {
    const SugusHovered = withHover(Sugus)
    const sugus = {
      sabor: 'piña',
      color: 'blue'
    }

    const ListaCocktailsConDatos = withData(ListaCocktailsSinDatos, 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', MiLoader)

    return (
      <div className="div-novedades">
        <button type="button" onClick={this.toggleDarkMode}>Toggle Dark Mode</button>
        <ListaCocktails />
        <hr/>
        <SugusHovered {...sugus} />
        <ListaCocktailsConDatos />

        <ctxDarkMode.Provider value={this.state.darkMode}>
          <CajaDarkMode />
        </ctxDarkMode.Provider>

        <CajaDarkMode />

        <Card>
          <h3>Titulo</h3>
          <img width="200px" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab earum obcaecati tempora, doloremque quia libero! Ipsam similique quo dignissimos odit, ducimus doloribus tenetur animi eaque nisi alias assumenda culpa!</p>
        </Card>

        <Card>
          <img width="200px" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
          <h3>Titulo</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab earum obcaecati tempora, doloremque quia libero! Ipsam similique quo dignissimos odit,ducimus doloribus tenetur animi eaque nisi alias assumenda culpa!</p>
        </Card>

      </div>
    )
  }
}
