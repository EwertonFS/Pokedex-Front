import CardsImg from "../../components/Cards/PokemonsDetails/CardsImg";
import CardsStatus from "../../components/Cards/PokemonsDetails/CardsStatus";
import CardsMoves from "../../components/Cards/PokemonsDetails/CardsMoves";
import CardsTypes from "../../components/Cards/PokemonsDetails/CardsTypes";
import {
  ContainerCards,
  Imagem,
  FrontImg,
  BackImg,
  ContainerType,
  Move,
  ContainerTypeMove,
} from "./styled";
import SearchAppBar from "../../components/AppBar/AppBarHome/SearchAppBar";
import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContex";
import { useState } from "react";
/* import { BASE_URL } from "../constansts/url"; */
import axios from "axios"

const PokemonsDetailsPage = () => {
const pokemons = useContext(GlobalStateContext)
const pokemonNames=useContext(GlobalStateContext)
console.log(pokemons)

/*  
  let list = pokemons.filter((poke) => {
    if(poke.nome === pokemons.nome){
        return poke.sprites.front_default
        
    }
  })  */

 


  
  return (
    <>
      <SearchAppBar title={"Lista de Detalhes"} />

      <ContainerCards>
        <Imagem>
          <FrontImg>
     {/*    {.map((poke)=>{
           return <CardsImg imgFront = {poke.sprites.front_default}  />
        })}  */} 
        <CardsImg />
        
          </FrontImg>
          <BackImg>
            <CardsImg />
          </BackImg>
        </Imagem>

        <CardsStatus />
        <ContainerTypeMove>
          <ContainerType>
            <CardsTypes title={"title"} number={"01"} />
            <CardsTypes title={"title"} number={"02"} />
          </ContainerType>
          <Move>
            <CardsMoves />
          </Move>
        </ContainerTypeMove>
      </ContainerCards>
    </>
  );
};

export default PokemonsDetailsPage;
