import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components"




export default function CardsTypes({title,number}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        <strong>{ title } :</strong>  {number}
        </Typography>
      </CardContent>

        
    </Card>
  );
}