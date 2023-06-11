import { YEAR } from "../../utils/constants"

export const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-900 lg:text-left">
      <div className="p-5 text-center text-neutral-700 dark:text-neutral-200">
        © {YEAR} Copyright - All right reserved
      </div>
    </footer>
  )
}
