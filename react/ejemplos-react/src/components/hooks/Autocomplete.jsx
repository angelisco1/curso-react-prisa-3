import React, { useState, useEffect } from 'react'
import { muestraMensaje } from './Hooks'

const Autocomplete = () => {
  const [cocktail, setCocktail] = useState('')
  // const [intervalId, setIntervalId] = useState(null)
  const [listaCocktails, setListaCocktails] = useState([])

  useEffect(() => {
    if (cocktail.length > 3) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then(resp => resp.json())
        .then(datos => {
          setListaCocktails(datos.drinks || [])
        })
    }
  }, [cocktail])

  useEffect(() => {
    const id = setInterval(() => {
      console.log('1 seg')
    }, 1000)
    // setIntervalId(id)

    return () => {
      clearInterval(id)
    }
  }, [])



  const handleChangeCocktail = (e) => {
    muestraMensaje('Cambiando el cocktail...')
    setCocktail(e.target.value)
  }

  const cocktails = listaCocktails.map(c => <li key={c.idDrink}>{c.strDrink}</li>)

  return (
    <div>
      <div>
        <label htmlFor="nombreCocktail">Cocktail:</label>
        <input
          type="text"
          id="nombreCocktail"
          name="cocktail"
          value={cocktail}
          onChange={handleChangeCocktail}
        />
      </div>
      <ul>
        {cocktails}
      </ul>
    </div>
  )
}

export default Autocomplete
