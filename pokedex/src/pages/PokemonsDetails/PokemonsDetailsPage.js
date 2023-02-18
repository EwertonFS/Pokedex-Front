import CardsImg from "../../components/Cards/PokemonsDetails/CardsImg";
import CardsImgBack from "../../components/Cards/PokemonsDetails/CardsImgBack";
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
  ContainerStatus,
} from "./styled";
import SearchAppBar from "../../components/AppBar/AppBarHome/SearchAppBar";


import  { useContext, useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContex";
import { useState } from "react";
/* import { BASE_URL } from "../constansts/url"; */
import { useParams } from "react-router-dom";


const PokemonsDetailsPage = () => {
  //console.log(front)
   //pegando pokemons filtrados 
  const [selectedPokemon, setSelectedPokemon] = useState({});
  
  const{ pokemons} = useContext(GlobalStateContext);
  
  const { name } = useParams(); //trazendo o name da outra tela
  // console.log(name) ;
  
  console.log(pokemons) 
    
     

  useEffect(() => {
    //comparando name de outra tela
    const currentPokemon = pokemons.find((item) => {return item.name === name})
    setSelectedPokemon(currentPokemon);
    
      
       } 
  , [name,pokemons]);
  return (
    <>
      <SearchAppBar title={"Lista de Detalhes"} />

      <ContainerCards>
        <Imagem>
          <FrontImg>
            <CardsImg front ={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default}/>
          </FrontImg>
          <BackImg>
            <CardsImgBack back ={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default}/>
          </BackImg>
        </Imagem>

        <ContainerStatus>
        <h1>Status</h1>
        {/* //verificações iteração para objeto fim */}
         {selectedPokemon && selectedPokemon.stats &&
         selectedPokemon.stats.map((stat)=>{
            return  <CardsStatus key={stat?.stat?.name} power={stat?.stat?.name} numberPower ={stat?.base_stat}/> })
              }
          </ContainerStatus>
        
        <ContainerTypeMove>
          <ContainerType>
            {selectedPokemon && selectedPokemon.types && 
            selectedPokemon.types.map((kind)=>
            <CardsTypes title={kind.type.name} /* number={kind.type.slot} */ />
            )}
          </ContainerType>
           <h3>Principais Poderes</h3>
          <Move>
            {selectedPokemon && selectedPokemon.moves && 
            selectedPokemon.moves.map((moviments,index)=>
            index<5 && <CardsMoves title={ moviments.move.name}/>
            )}
          </Move>
        </ContainerTypeMove>
      </ContainerCards>
    </>
  );
};

export default PokemonsDetailsPage;
