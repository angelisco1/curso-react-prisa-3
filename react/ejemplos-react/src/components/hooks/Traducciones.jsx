import React, { useContext } from 'react'
import { ctxLang } from './Hooks'

const traducciones = {
  es: {
    hola: 'hola',
    adios: 'adios',
  },
  en: {
    hola: 'hello',
    adios: 'bye',
  }
}

const Traducciones = () => {
  const lang = useContext(ctxLang);

  return (
    <div>
      <p>{traducciones[lang].hola}</p>
      <p>{traducciones[lang].adios}</p>
    </div>
  )
}

export default Traducciones
