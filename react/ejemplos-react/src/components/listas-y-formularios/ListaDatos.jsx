import React from 'react'
import Sugus from './Sugus'

const ListaDatos = (props) => {
  const listaSugusCmp = props.listaSugus.map(item => {
    return (
      <Sugus
        key={item.id}
        sabor={item.sabor}
        color={item.color}
      />
      // <Sugus
      //   key={item.id}
      //   item={item}
      // />
    )
  })

  return (
    <div>
      {listaSugusCmp}
    </div>
  )
}

export default ListaDatos
