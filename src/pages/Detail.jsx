import { useParams } from 'react-router-dom'

const features = [
  { name: 'Altura', description: '0,7m' },
  {
    name: 'Categoria',
    description: 'Semilla'
  },
  { name: 'Peso', description: '6,9kg' },
  { name: 'Habilidad', description: 'Espesura' },
  { name: 'Sexo', description: 'M - F' }
]

export const Detail = () => {
  // con este id hay que obtener el detalle del pokemon
  let { id } = useParams()

  return (
    <main className="main-container">
      <h1>NOMBRE Nº 1</h1>
      <section className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-3 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        {/* Imagen y puntos bases*/}
        <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <p>points</p>
        </div>
        {/* las 5 rows*/}
        <div className="grid grid-cols-1 grid-rows-5  gap-x-2 gap-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Este Pokémon nace con una semilla en el lomo, que brota con el paso
            del tiempo.
          </h2>
          <p className="mt-4 text-gray-500">Versiones:</p>
          <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-1 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div>
            <h3>Tipo</h3>
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
    </main>
  )
}
