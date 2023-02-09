import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PokemonsDetailsCardsStatus() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          STATUS 
          <br />
          hp:49 
          <br />
          Attack:45 
          <br />
          defense: 52 
          <br />
          especial-ataque: 43
          <br />
          especial-defense : 54 
           <br />
          speed:54
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
    </Card>
  );
}
