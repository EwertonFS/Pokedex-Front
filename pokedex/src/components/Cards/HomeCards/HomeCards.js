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

export default function HomeCards(props) {
  const {pokemons}= useContext(GlobalStateContext)
  console.log(pokemons)
  
  
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
            <Button size="small">add
            <AddCircleOutlineIcon>
            </AddCircleOutlineIcon>
            </Button>
            
          <Link to={"/detalhesPokemons"}>
            <Button size="small">info
            <InfoIcon></InfoIcon>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </CardContainer>
  );
}
