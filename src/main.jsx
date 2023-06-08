import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { PokemonesProvider } from './context/PokemonesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonesProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PokemonesProvider>
  </React.StrictMode>
)
