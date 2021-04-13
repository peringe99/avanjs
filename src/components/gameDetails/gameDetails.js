import React, { useState, useEffect } from 'react';



const GameDetails = () => {

const [highscores, setHighscores] = useState();

  async function GetHighscore() { 
    const response = await fetch("../highscores.json");
    const data = await response.json();
    setHighscores(data);
   }


   useEffect(() => {
    if(highscores === undefined){
     GetHighscore();
   } else if (highscores.length > 0) {
   } else {
   }}, [highscores])

   

if (highscores && highscores.length > 0) {
  return (
    <div>
       <h1>{highscores[2].score}</h1>
     </div>
   );
  }
 else {
return <> </>
}}
  
 export default GameDetails;
 