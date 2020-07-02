import React, { useState, useEffect } from 'react'

export const useInput = (initialVal = '', validaciones = []) => {
  const [val, setVal] = useState(initialVal)
  const [valido, setValido] = useState(true)

  useEffect(() => {
    const isValid = validaciones.every((regExp) => {
      return val.match(regExp)
    })
    setValido(isValid)
  }, [val])

  return [
    val,
    (e) => setVal(e.target.value),
    valido
  ]
}