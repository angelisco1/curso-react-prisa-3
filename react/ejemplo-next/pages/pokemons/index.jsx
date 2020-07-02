import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=9`)
    .then(resp => resp.json())
    .then(datos => {
      return {
        props: {
          pokemons: datos.results
        }
      }
    })
}

const Pokemons = ({pokemons}) => {
  const router = useRouter()
  // const [pokemons, setPokemons] = useState([])

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon?limit=9`)
  //     .then(resp => resp.json())
  //     .then(datos => {
  //       setPokemons(datos.results)
  //     })
  // }, [])

  const listaPokemons = pokemons.map(p => {
    const pokemonId = p.url.split('/')[6]
    return (
      <li key={pokemonId}>
        <Link href={`${router.pathname}/[id]`} as={`${router.pathname}/${pokemonId}`}>
          <a>{p.name}</a>
        </Link>
      </li>
    )
  })

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {listaPokemons}
      </ul>
    </div>
  )
}

export default Pokemons
