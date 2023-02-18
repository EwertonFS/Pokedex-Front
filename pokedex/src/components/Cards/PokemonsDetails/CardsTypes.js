import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";





export default function CardsTypes({title}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        <strong><p>{ title }</p> </strong>  
        </Typography>
      </CardContent>

        
    </Card>
  );
}