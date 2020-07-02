import React from 'react'
import { useInput } from './useInput'

const Form = () => {
  const [nombre, setNombre, nombreValido] = useInput('', [/.+/, /.{3,}/])

  return (
    <div>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={setNombre}
          style={{border: `1px solid ${nombreValido ? 'green' : 'red'}`}}
        />
        {nombreValido ? null : <p>Nombre invalido</p>}
        {!nombreValido && <p>Nombre invalido</p>}
      </div>
    </div>
  )
}

export default Form
