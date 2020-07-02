import React from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = (context) => {
  const pokemonId = context.query.id;
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(resp => resp.json())
    .then(datos => {
      return {
        props: {
          pokemonId: datos.id,
          name: datos.name,
          types: datos.types
        }
      }
    })
}

const PokemonInfo = ({pokemonId, name, types}) => {
  // const router = useRouter();
  // const pokemonId = router.query.id

  return (
    <div>
      <h1>Pokemon #{pokemonId}</h1>
      <p>Nombre: {name}</p>
      <pre>{JSON.stringify(types, null, 4)}</pre>
    </div>
  )
}

export default PokemonInfo
