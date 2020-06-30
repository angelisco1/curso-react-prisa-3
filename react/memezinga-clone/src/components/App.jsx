import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Generador from './Generador'
import ListaMemes from './ListaMemes'
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={ListaMemes} />
          <Route path="/generador" component={Generador} />
        </Switch>
      </div>
    )
  }
}
