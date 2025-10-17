import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home"
import Registro from "./pages/registro"
export default function RoutesApp(){
/*esta es la pagina que se insertar los links y sirven directamente en el navbar*/
    return(
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/registro" element={ <Registro/> } />
        </Routes>
    )

}