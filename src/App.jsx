import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './utils/constants.js'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Error } from './pages/Error'
import { Contact } from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={`${ROUTES.detail}/:id`} element={<Detail />} />
        <Route path={ROUTES.contact} element={<Contact />}/>
        <Route path={ROUTES.error} element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
