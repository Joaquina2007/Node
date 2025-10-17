import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar'

import { BrowserRouter } from 'react-router-dom'
import RoutesApp from "./routes"

/*Tiene que ir un BrowserRouter para poder conectar los links*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <NavBar/>
      <RoutesApp/>
    </BrowserRouter>
  </StrictMode>,
)
