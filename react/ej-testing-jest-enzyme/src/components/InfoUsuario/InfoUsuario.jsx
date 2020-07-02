import React from 'react'

const InfoUsuario = (props) => {
  return (
    <div>
      {
        props.logueado
        ?
          (
            <div>
              <h1>Usuario logueado</h1>
              <p>El usuario es: {props.usuario}</p>
            </div>
          )
        :
          (
            <div>
              <h1>Usuario no logueado</h1>
              <p>Por favor, logueate</p>
            </div>
          )
      }
    </div>
  )
}

export default InfoUsuario
