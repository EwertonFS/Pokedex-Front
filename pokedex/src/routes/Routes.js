import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import PokedexPage from "../pages/pokedex/PokedexPage"
import PokemonsDetailsPage from "../pages/PokemonsDetails/PokemonsDetailsPage"
import CssBaseline from '@mui/material/CssBaseline'


 const RoutesApp =()=>{
   return(
    <CssBaseline >
    <Routes>

        <Route path='/' element={<HomePage />}></Route>
        <Route path='/pokemon' element={<PokedexPage />}></Route>
        <Route path='/pokemon/:name' element={<PokemonsDetailsPage />}></Route>
        {/* //acrescentar erro page */}
        {/* //<Route path="*" element={<NotFound />} /> */}
    </Routes>
    </CssBaseline>
   )
   
}

export default RoutesApp