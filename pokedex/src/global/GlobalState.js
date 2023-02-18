import {React} from 'react';
import { useState } from "react";
import axios from "axios"
import {useEffect }from "react"
import { BASE_URL } from "../constansts/url";
import GlobalStateContext from "./GlobalStateContex";


const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]); //renderiza primeira lista
  const [pokemons, setPokemons] = useState([]);// renderiza index da lisra de dependicas
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokemonNames()
  }, []);

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      //uma requisição para cada pokemom
      axios
        .get(`${BASE_URL}/pokemon/${item.name}`)
        .then((response) => {
          newList.push(response.data);
          //ao inves de setarAqui fazemos a logica para identicar p nº de vezes da ação
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((error) => console.log(error.message));
    });
    // Renderizar apos PokemonsNames (depende)
  }, [pokemonNames]);

  const getPokemonNames = () => {
    axios
      .get(`${BASE_URL}/pokemon?limit=20`)
      .then((response) => {
        setPokemonNames(response.data.results);
      })
      .catch((error) => console.log(error.message));
  };

  const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;