import { createContext, useEffect, useState } from 'react'

const PokemonsContext = createContext()

const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
	// si no setean limit se buscan 12
  const [limit, setLimit] = useState(12) 
  const [loading, setLoading] = useState(false)
  const BASE_URL = 'https://pokeapi.co/api/v2/'
	/*
	Para tener todos los pokemones: 
	limit = 1282 o un numero mayor
	offset = 0
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

  // Llamar a un pokemon por ID
  const getPokemonByID = async (id) => {
    const res = await fetch(`${BASE_URL}pokemon/${id}`)
    const data = await res.json()
    return data
  }

  useEffect(() => {
    // limit = 50, offset = 0
    getAllPokemons()
  }, [])

  const data = { pokemons, setPokemons }

  return (
    <PokemonsContext.Provider value={data}>{children}</PokemonsContext.Provider>
  )
}

export { PokemonsProvider }
export default PokemonsContext
