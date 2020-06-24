import React from 'react'

const ContadorSinEstado = (props) => {
  console.log(props)
  return (
    <div>
      <button type="button" onClick={props.onHandleDecrement}>-</button>
      <span>Cuenta: {props.cuenta}</span>
      <button type="button" onClick={props.onHandleIncrement}>+</button>
    </div>
  )
}

export default ContadorSinEstado
