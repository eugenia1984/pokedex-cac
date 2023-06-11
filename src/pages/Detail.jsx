import { useParams } from 'react-router-dom'
import { Table } from '../components/Table'
import { ImgGeneral } from '../components/ImgGeneral'
import { useContext, useEffect, useState } from 'react'
import PokemonsContext from '../context/PokemonsContext'

const initialState = {
  height: '',
  weight: '',
  moves: '',
  abilities: ''
}

export const Detail = () => {
  const { getPokemonById } = useContext(PokemonsContext)
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const { id } = useParams() // id to get pokemon detail

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id)
    setPokemon(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemon(id)
  }, [])

  const features = [
    { name: 'Height', description: `${pokemon.height} cm` },
    { name: 'Weight', description: `${pokemon.weight} kg` },
    { name: 'Base experience', description: `${pokemon.base_experience}` }
  ]

  return (
    <main className="main-container">
      {loading && <p>Loading...</p>}
      {console.log(pokemon)}
      {pokemon && (
        <>
          <h1>
            {pokemon.name} - Nº {pokemon.id}
          </h1>
          <section className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-3 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              {!loading && (
                <ImgGeneral
                  imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                  imgAlt={pokemon.name}
                />
              )}
              <div>
                <h2 className="my-3">Type</h2>
                {pokemon.types &&
                  pokemon.types.map((item) => (
                    <span
                      key={item.type.name}
                      className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mr-2"
                    >
                      {item.type.name}
                    </span>
                  ))}
              </div>
              
            </div>
            {/* las 5 rows*/}
            <div className="grid grid-cols-1 grid-rows-2 gap-x-2 gap-y-2">
              <div>
                <h2 className="my-2">Features</h2>
                <dl className="mt-6 border border-gray-600 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 ">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      <p className="font-medium text-gray-900 p-1">
                        {feature.name} :
                        <span className="mt-1 text-sm text-gray-500 pl-2 pb-2">
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h2>Base points</h2>
                <Table stats={pokemon.stats} />
              </div>
            </div>
          </section>
          <section>
            <h2>Evolutions</h2>
          </section>
        </>
      )}
    </main>
  )
}
