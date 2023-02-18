import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function CardsImg(props) {
  
  return( 
      
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.front}
      />
    
    </Card>
    
  );
}
