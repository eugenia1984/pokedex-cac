export const ImgGeneral = ({ imgSrc, imgAlt }) => {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full rounded-t-md overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
  )
}
