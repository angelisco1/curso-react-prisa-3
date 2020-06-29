import React from 'react'
import { ctxDarkMode } from './AjaxYNovedades'

export const withDarkMode = (CmpWrapped) => {
  return class extends React.Component {
    render() {
      return (
        <ctxDarkMode.Consumer>
          {darkMode => (
            <CmpWrapped darkMode={darkMode} />
          )}
        </ctxDarkMode.Consumer>
      )
    }
  }
}