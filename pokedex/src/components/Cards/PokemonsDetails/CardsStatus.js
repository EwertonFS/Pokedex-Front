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
          <br />
         <strong><h3>Poderes</h3></strong>
          <br />
          <br />
         <strong> hp:</strong>49 
          <br />
          <br />
          <br />
          <strong>Defense:</strong>52
          <br />
          <br />
          <br />
          <strong> Hp:</strong>49 
          <br />
          <br />
          <br />
          <strong> Especial-ataque: </strong>53
          <br />
          <br />
          <br />
          <strong> Especial-defesa:</strong>54
           <br />
           <br />
           <br />
           <strong> speed:</strong>55

        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
    </Card>
  );
}
