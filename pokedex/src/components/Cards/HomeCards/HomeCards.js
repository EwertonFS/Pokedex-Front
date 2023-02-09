import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardContainer } from "./styled";
import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios"
import useEffect from "react"


export default function HomeCards(props) {
 
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemon(result.data.results);
    };
    fetchData();
  }, []);
  
  return (
    <CardContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
      {pokemon.map(pokemons => (
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              nome:{pokemons.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Descrição: Lizards are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
      ))}
      
        <CardActions>
         
            <Button size="small">Adcionar</Button>
          
          <Link to={"/detalhesPokemons"}>
            <Button size="small">Ver Detalhes</Button>
          </Link>
        </CardActions>
      </Card>
    </CardContainer>
  );
}
