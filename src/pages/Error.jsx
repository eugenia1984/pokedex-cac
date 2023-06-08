import { GoButton } from '../components/buttons/GoButton'
import { Text } from '../components/Text'
import { ROUTES } from '../utils/constants'

export const Error = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 main-container">
      <div className="text-center">
        <Text text="404" style="text-base font-bold text-indigo-600" />
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h2>
        <Text text="Sorry, we couldn’t find the page you’re looking for." />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <GoButton text="Go back home" to={ROUTES.home}/>
        </div>
      </div>
    </main>
  )
}
