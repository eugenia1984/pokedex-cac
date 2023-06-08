import { useParams } from 'react-router-dom'
import { Table } from '../components/Table'
import { ImgGeneral } from '../components/ImgGeneral'
import { usePokemon } from '../hooks/usePokemon'

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
  const { id } = useParams() // id to get pokemon detail
  const { pokemonData, loading } = usePokemon(id)
  // TODO: despues borrar este console
  console.log('pokemonData -> ', pokemonData)

  return (
    <main className="main-container">
      {loading && <p>Loading...</p>}
      {pokemonData && (
        <>
          <h1>
            {pokemonData.name} - Nº {pokemonData.id}
          </h1>
          <section className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-3 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            {/* Imagen y puntos bases (stats)*/}
            <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              {!loading && (
                <ImgGeneral
                  imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`}
                  imgAlt={pokemonData.name}
                />
              )}
              <div>
                <h2>Base points</h2>
                <Table stats={pokemonData.stats} />
              </div>
            </div>
            {/* las 5 rows*/}
            <div className="grid grid-cols-1 grid-rows-3 gap-x-2 gap-y-2">
              <div>
                <h2 className="my-2">Features</h2>
                <dl className="mt-6 border border-gray-600 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 ">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="border-b border-gray-400 pt-2"
                    >
                      <p className="font-medium text-gray-900 pl-2">
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
                <h2 className="my-2">Type</h2>
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
                <h2 className="my-2">Debilidad</h2>
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
