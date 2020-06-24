import React from 'react'
import Sugus from './Sugus'

const ListaDatos = (props) => {
  const listaSugusCmp = props.datos.map(item => {
    return (
      <Sugus key={item.id} sabor={item.sabor} color={item.color} />
    )
  })

  return (
    <div>
      {listaSugusCmp}
    </div>
  )
}

export default ListaDatos
