import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar'
import Characters from './components/characters'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Characters/>
  </StrictMode>,
)
