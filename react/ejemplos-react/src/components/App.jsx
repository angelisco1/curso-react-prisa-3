import React, { Component } from 'react'
import TiposDeComponentes from './tipos-de-componentes/TiposDeComponentes'
import ListasYFormularios from './listas-y-formularios/ListasYFormularios';
import CicloDeVida from './ciclo-de-vida/CicloDeVida';
import AjaxYNovedades from './ajax-y-novedades/AjaxYNovedades';
import AppRouting from './routing/AppRouting';
import Hooks from './hooks/Hooks';

export default class App extends Component {
  render() {
    let nombre = 'Ángel';
    let styles = {
      textDecoration: 'underline'
    }

    return (
      <div>
        {/* <h1>Hola {nombre}!</h1>
        <p style={styles}>Un párrafo</p> */}
        {/* <TiposDeComponentes /> */}
        {/* <ListasYFormularios /> */}
        {/* <CicloDeVida /> */}
        {/* <AjaxYNovedades /> */}
        {/* <AppRouting /> */}
        <Hooks />
      </div>
    )
  }
}