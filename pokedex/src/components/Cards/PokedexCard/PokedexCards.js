import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import GlobalStateContext from "../../../global/GlobalStateContex";
import InfoIcon from '@mui/icons-material/Info';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';



export default function PokedexCards() {

  const { pokemons,setPokemons,pokedex,setPokedex}= useContext(GlobalStateContext)
  //console.log(pokemons)
  //console.log(pokemons)
  
  const addPokemons = () =>{
    //vefificando se o pokemons é igual
    const pokeIndex = pokemons.findIndex((item) =>{return item.name === pokemons.name})  
    //aqui estou removendo do array
    const newPokemonsList= [...pokemons];
    newPokemonsList.splice(pokeIndex,1);
    // adicionando apos remocao
    const orderedPokemons = newPokemonsList.sort((a,b)=>{return a.id - b.id})

    const newPokexList = [...pokemons,pokemons.name]

    const newPokedexList = [...pokedex, pokemons];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  }


  const removePokemons = () =>{
    
  }


  
  return (
  
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={pokemons.sprites.front_default
          }
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">name:{pokemons.poke.name}</Typography>
          
           

          
        </CardContent>
            <CardActions>
              <Link to={'/pokedex'}>
            <Button  onClick = {addPokemons()}size="small">
              Remover

           <RestoreFromTrashIcon></RestoreFromTrashIcon>
            </Button>
              </Link>
            
            <Link to ={(`/pokemon/${pokemons.poke.name}`)}>
            <Button /* onCLick = {()=>navigate(`/pokemon/${pokemon.name}`)}  */size="small">Info
            <InfoIcon></InfoIcon>
            </Button>
            </Link>
        </CardActions>
      </Card>
    
  );
}
