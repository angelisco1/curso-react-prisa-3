import React, { useState, useMemo } from 'react'

const InfoPersona = () => {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [email, setEmail] = useState('')

  const nombreCompleto = useMemo(() => {
    console.log('Pasa por el useMemo')
    return `${nombre} ${apellidos}`
  }, [nombre, apellidos])

  return (
    <div>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          value={apellidos}
          onChange={e => setApellidos(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Nombre y apellidos: {nombreCompleto}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default InfoPersona
