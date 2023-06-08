import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { Table } from '../components/Table'
import { ImgGeneral } from '../components/ImgGeneral'

const features = [
  { name: 'Height', description: '0,7m' },
  {
    name: 'Categoria',
    description: 'Semilla'
  },
  { name: 'Weight', description: '6,9kg' },
  { name: 'Habilidad', description: 'Espesura' },
  { name: 'Sexo', description: 'M - F' }
]

export const Detail = () => {
  const [loading, setLoading] = useState(false)
  const [pokemonData, setPokemonData] = useState({})
  let { id } = useParams() // id to get pokemon detail

  const getPokemonByID = async (id) => {
    setLoading(true)
    const res = await fetch(`${BASE_URL}pokemon/${id}`)
    const data = await res.json()
    setLoading(false)
    setPokemonData(data)
  }

  useEffect(() => {
    getPokemonByID(id)
  }, [id])

  console.log('pokemonData -> ', pokemonData)

  return (
    <main className="main-container">
      {loading && <p>Loading...</p>}
      {pokemonData && (
        <>
          <h1>
            {pokemonData.name} Nº {pokemonData.id}
          </h1>
          <section className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-3 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            {/* Imagen y puntos bases (stats)*/}
            <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <ImgGeneral
                imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                imgAlt={pokemonData.name}
              />
              {/*  src={pokemonData.sprites.front_default}/> */}
              <div>
                <h2>Base points</h2>
                <Table stats={pokemonData.stats} />
              </div>
            </div>
            {/* las 5 rows*/}
            <div className="grid grid-cols-1 grid-rows-4  gap-x-2 gap-y-2">
              <p className="mt-4 text-gray-500">Versiones:</p>
              <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-2"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div>
                <h3 className="mb-2">Type</h3>
                {pokemonData.types &&
                  pokemonData.types.map((item) => (
                    <span
                      key={item.type.name}
                      className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mr-2"
                    >
                      {item.type.name}
                    </span>
                  ))}
              </div>
              <div>
                <h3>Debilidad</h3>
              </div>
            </div>
          </section>
          {/* Evoluciones*/}
          <section>
            <h2>Evolutions</h2>
          </section>
        </>
      )}
    </main>
  )
}
