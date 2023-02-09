import SearchAppBar from "../../components/AppBar/AppBarHome/SearchAppBar";
import HomeCards from "../../components/Cards/HomeCards/HomeCards";
import { ContainerHomePage } from "./styled";
import { useState } from "react";
import axios from "axios"
import useEffect from "react"

const HomePage = () => {
   //useEfect
  const [pokemons, setPokemons] = useState( [] 
 
 /*    {results:[
    {
      name: "suction-cups",
      url: "https://pokeapi.co/api/v2/ability/21/",
    }
]} */ ) 

/* useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
    setPokemons(result.data.results);
  };
  fetchData();
}, []);
  */

  return (
    <>
      <SearchAppBar />
      <ContainerHomePage>
        {pokemons.map((pokemon) => (
          <HomeCards key={pokemon.url} info={pokemon.name} />
        ))}

      </ContainerHomePage>
    </>
  );
};

export default HomePage;
