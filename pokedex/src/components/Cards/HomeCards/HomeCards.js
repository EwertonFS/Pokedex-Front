import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardContainer } from "./styled";
import { Link } from "react-router-dom";
import GlobalStateContext from "../../../global/GlobalStateContex";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import DetailsPokemonName from "../../../routes/coordination";


export default function HomeCards(props) {
  const { pokemons,setPokemons,pokedex,setPokedex}= useContext(GlobalStateContext)
  
  const addPokemons = () =>{
    //vefificando se o pokemons é igual
    const pokeIndex = pokemons.findIndex((item) =>{return item.name === pokemons.name})  
    //aqui estou removendo do array
    const newPokemonsList= [...pokemons];
    newPokemonsList.splice(pokeIndex,1);
    // adicionando apos remocao
    const orderedPokemons = newPokemonsList.sort((a,b)=>{return a.id - b.id})

    const newPokedexList = [...pokemons,pokemons.name]

 
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  }

  return (
    <CardContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={props.poke.sprites.front_default
          }
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">name:{props.poke.name}</Typography>
          
           

          
        </CardContent>
        <CardActions>
            <Button size="small" onClick ={()=>addPokemons()}>
              <Link to={'/pokemon'}>

              add
            <AddCircleOutlineIcon>
            </AddCircleOutlineIcon>
            </Link>
            </Button>
              
            





            <Link to ={(`/pokemon/${props.poke.name}`)}>
            <Button /* onCLick = {()=>navigate(`/pokemon/${pokemon.name}`)}  */size="small">info
            <InfoIcon></InfoIcon>
            </Button>
            </Link>
        </CardActions>
      </Card>
    </CardContainer>
  );
}
