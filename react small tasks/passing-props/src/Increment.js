import { Button } from "@mui/material";
import React, { useState } from 'react';
export function Increment({ newdata }) {
  const[d,setd]=useState(0)
  const data=function ()
  {
    let x=newdata.func();
    setd(x);
    
  }
  
   return (
    <div>
    <Button onClick={data}>Increment me</Button>
    
      <h1>{d}</h1>
    </div>
  );
}


