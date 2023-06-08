import { CardList } from "../components/cards/CardList"

export const Home = ({ pokemons }) => {
  return (
    <main className="bg-white main-container">
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-gray-900">Home</h1>
        <CardList list={pokemons}/>
      </section>
    </main>
  )
}
