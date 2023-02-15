import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardsType() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        <strong>  Movie</strong>
          <br />
          <br />
           <br />
        <strong>  Movie:</strong> name  01
          <br />
          <br />
          <br />
        <strong>  Movie:</strong> Name 02
          <br />
          <br />
          <br />
        <strong>  Movie:</strong> Name 03
          <br />
           <br />
           <br />
  
        </Typography>
      
        {/* <Typography variant="body2" color="text.secondary"></Typography> */}
      </CardContent>
    </Card>
  );
}