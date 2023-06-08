import { ROUTES } from '../../utils/constants'
import { GoButton } from '../buttons/GoButton'

export const CardItem = ({ element }) => {
  return (
    <div key={element.order}>
      <div className="group relative bg-gray-100 rounded-b-md">
        <div className="aspect-h-1 aspect-w-1 w-full rounded-t-md overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={element.sprites.other.home.front_default}
            alt={element.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="grid gap-2 grid-cols-1 grid-rows-4 mx-3 pb-3">
          <p className="mt-3 text-sm text-gray-500">Nº {element.order}</p>
          <h2 className="uppercase text-gray-700">{element.name}</h2>
          <div>
            {element.types.map((el, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2"
              >
                {el.type.name}
              </span>
            ))}
          </div>
          <GoButton text="+ Info" to={`${ROUTES.detail}${element.order}`} />
        </div>
      </div>
    </div>
  )
}
