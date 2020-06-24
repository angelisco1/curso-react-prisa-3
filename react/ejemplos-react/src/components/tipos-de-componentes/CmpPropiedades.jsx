import React from 'react'

const CmpPropiedades = (props) => {
  // No se puede modificar el valor de una prop
  // props.texto = '****'

  return (
    <div>
      <p>Msg: {props.texto}</p>
    </div>
  )
}

export default CmpPropiedades
