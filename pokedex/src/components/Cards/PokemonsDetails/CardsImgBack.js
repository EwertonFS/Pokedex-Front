import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import  { useContext, useEffect } from "react";
import GlobalStateContext from "../../../global/GlobalStateContex";
import { useState } from "react";
/* import { BASE_URL } from "../constansts/url"; */
import { useParams } from "react-router-dom";


export default function CardsImg({back}) {
  

  return( 
      
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={back}
      />
    
    </Card>
    
  );
}
