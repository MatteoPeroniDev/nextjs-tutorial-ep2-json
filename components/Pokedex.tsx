import { IPokemon } from '@/interfaces/pokemon'
import React from 'react'

interface Props {
  pokemonList: IPokemon[]
}

function Pokedex({ pokemonList }: Props) {
  return (
    <div className='w-full h-full'>
      <h1 className='mb-2'>CONTENTS</h1>
      <div className='overflow-y-auto h-full pb-8'>
        {
          pokemonList.map(pokemon => {
            return <div key={pokemon.number}>
              <p>{pokemon.number.toString().padStart(3, "0")}</p>
              <h2 className='uppercase ml-8'>{pokemon.name}</h2>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Pokedex