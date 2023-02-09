import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import PokedexPage from "../pages/pokedex/PokedexPage"
import PokemonsDetailsPage from "../pages/PokemonsDetails/PokemonsDetailsPage"



 const RoutesApp =()=>{
   return(
    
    <Routes>

        <Route path='/' element={<HomePage />}></Route>
        <Route path='/pokemons' element={<PokedexPage />}></Route>
        <Route path='/detalhesPokemons' element={<PokemonsDetailsPage />}></Route>
        
    </Routes>

   )
   
}

export default RoutesApp