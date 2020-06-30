import React from 'react'
import { withRouter } from 'react-router-dom'

const Componente = (props) => {
  console.log(props)

  return (
    <div>
      Componente withRouter
    </div>
  )
}

export default withRouter(Componente)
