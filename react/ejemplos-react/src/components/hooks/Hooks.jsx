import React, { useState } from 'react'
import Autocomplete from './Autocomplete'
import Traducciones from './Traducciones'
import InfoPersona from './InfoPersona'
import AudioPlayer from './AudioPlayer'
import Caja from './Caja'
import Form from './Form'

export const ctxLang = React.createContext('es')

export const muestraMensaje = (msg) => {
  console.log(msg)
}

const Hooks = () => {

  const [cuenta, setCuenta] = useState(0)
  const [mostrar, setMostrar] = useState(true)
  // const [state, setstate] = useState({user: 'angel', isAdmin: true})
  const [lang, setLang] = useState('es')

  const incrementar = () => {
    muestraMensaje('Se va a incrementar la cuenta')
    setCuenta(cuenta+1)
    setMostrar(!mostrar)
  }

  return (
    <div>
      <div>
        <span>{cuenta}</span>
        <button type="button" onClick={incrementar}>+</button>
      </div>

      {mostrar ? <Autocomplete /> : null}

      <select name="lang" id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <ctxLang.Provider value={lang}>
        <Traducciones />
      </ctxLang.Provider>
      <InfoPersona />
      <AudioPlayer />
      <Caja />

      <Form />
    </div>
  )
}

export default Hooks
