import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const usePokemon = (id) => {
  const [pokemonData, setPokemonData] = useState({})
  const [loading, setLoading] = useState(false)

  const getPokemonDataById = (id) => {
    setLoading(true)
    axios
      .get(`${BASE_URL}pokemon/${id}`)
      .then((response) => {
        setPokemonData(response.data)
      })
      .catch((err) => {
        alert('Ups..., error found: ',err)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getPokemonDataById(id)
  }, [id])

  return { pokemonData, loading }
}
