import { ROUTES } from '../../utils/constants'
import { ImgGeneral } from '../ImgGeneral'
import { GoButton } from '../buttons/GoButton'

export const CardItem = ({ element }) => {
  return (
    <div key={element.name}>
      <div className="group relative bg-gray-100 rounded-b-md">
        <ImgGeneral
          imgSrc={element.sprites.other.home.front_default}
          imgAlt={element.name}
        />
        <div className="grid gap-2 grid-cols-1 grid-rows-4 mx-3 pb-3">
          <p className="mt-3 text-sm text-gray-500">Nº {element.id}</p>
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
          <GoButton text="+ Info" to={`${ROUTES.detail}${element.id}`} />
        </div>
      </div>
    </div>
  )
}
