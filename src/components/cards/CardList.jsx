import { CardItem } from './CardItem'

export const CardList = ({ list }) => {
  return (
    <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {list &&
        list.map((pokemon) => (
          <CardItem key={pokemon.name} element={pokemon} />
        ))}
    </section>
  )
}
