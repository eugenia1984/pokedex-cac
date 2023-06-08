import { createContext, useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'

const PokemonsContext = createContext()

const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(30) 
  const [loading, setLoading] = useState(false)

	/*
	Para tener todos los pokemones: 
	limit = 1282 es el maximo, el la cantidad de resultados que traigo
	offset = 0, empiezo a contar desde el pokemon con id 0
	*/
  const getAllPokemons = async (offset, limit) => {
		setLoading(true)
    const res = await fetch(
      `${BASE_URL}pokemon?offset=${offset}&limit=${limit}`
    )
    const data = await res.json()

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })
    const results = await Promise.all(promises)

    setPokemons([...pokemons, ...results])
    setLoading(false)
  }

  useEffect(() => {
    getAllPokemons(offset, limit)
  }, [offset, limit])

  const data = { pokemons, offset, limit, loading, setPokemons }

  return (
    <PokemonsContext.Provider value={data}>{children}</PokemonsContext.Provider>
  )
}

export { PokemonsProvider }
export default PokemonsContext
