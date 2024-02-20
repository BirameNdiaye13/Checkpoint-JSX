/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import CardContainer from './CustomCard.js';




const firstName = prompt(" ton nom ?"); 
function App() {
  return (
      <div>
      <CardContainer firstName={firstName} />
      <p style={{position:'relative',top:'100px',left:'300px'}}>Bonjour, {firstName ? firstName : "là"} </p>
      <>
        {firstName && <img src='./assets/img/valider.png'/>}
      </>
    </div>
    
  );
}





export default App;
