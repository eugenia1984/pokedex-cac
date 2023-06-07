import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/constants"

export const HeaderLogo = ({imgSrc, imgAlt}) => {
  return (
    <div className="flex lg:flex-1">
      <Link to={ROUTES.home} className="-m-1.5 p-1.5">
        <span className="sr-only">Pokedex-CAC</span>
        <img
          width="48"
          height="48"
          src={imgSrc}
          alt={imgAlt}
        />
      </Link>
    </div>
  )
}
