import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardsTypes() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         type : 01       
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         type : 02       
        </Typography>
        {/* <Typography variant="body2" color="text.secondary"></Typography> */}
      </CardContent>
    </Card>
  );
}