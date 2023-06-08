export const ImgGeneral = ({ imgSrc, imgAlt }) => {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full rounded-t-md overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 pb-1">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-full object-cover object-center lg:h-full "
      />
    </div>
  )
}
