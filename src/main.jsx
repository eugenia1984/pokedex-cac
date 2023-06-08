import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { PokemonsProvider } from './context/PokemonsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonsProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PokemonsProvider>
  </React.StrictMode>
)
