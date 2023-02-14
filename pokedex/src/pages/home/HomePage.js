import SearchAppBar from "../../components/AppBar/AppBarHome/SearchAppBar";
import HomeCards from "../../components/Cards/HomeCards/HomeCards";
import { ContainerHomePage } from "./styled";
import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContex";


const HomePage = () => {
 const {pokemons}= useContext(GlobalStateContext)
  
  return (
    <>
      <SearchAppBar  title = {"Lista de Pokémons"}/>
      <ContainerHomePage>
      { pokemons.map((poke) => {
            return <HomeCards key={poke.name} poke={poke} />;
          }) }
       
     {/* {  <HomeCards /> } */}
      </ContainerHomePage>
    </>
  );
};

export default HomePage;
