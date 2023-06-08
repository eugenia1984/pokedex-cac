import { createContext, useEffect, useState } from 'react'

const PokemonesContext = createContext()

// Dejo harcodeado dos pokemones, por si hay error en el fetch 
// al menos muestro estos
const initialState = [
  {
    name: 'spearow',
    url: 'https://pokeapi.co/api/v2/pokemon/21/'
  },
  {
    name: 'fearow',
    url: 'https://pokeapi.co/api/v2/pokemon/22/'
  }
] 

const PokemonesProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState(initialState)
  useEffect(() => {
    // para setear los pokemones
    // aca hay que hacer el fetch y traer el listado de pokemones
  }, [])
  const data = { pokemones, setPokemones }

  return (
    <PokemonesContext.Provider value={data}>
      {children}
    </PokemonesContext.Provider>
  )
}

export { PokemonesProvider }
export default PokemonesContext
