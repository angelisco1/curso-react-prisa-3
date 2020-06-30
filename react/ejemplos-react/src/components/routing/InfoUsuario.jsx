import React from 'react'

const InfoUsuario = (props) => {
  console.log(props)

  return (
    <div>
      <h2>Info usuario {props.match.params.usuarioId}</h2>
      <p>Nombre: {props.location.state.nombre}</p>
    </div>
  )
}

export default InfoUsuario
