import React from 'react';
import Card from 'react-bootstrap/Card';
import Nom from './nom.js';
import Prix from './Price.js';
import Description from './Description.js';
import Image from './Image.js';


function CardContainer() {
    return (
      <Card style={{ width: '280px',backgroundColor:'black',position:'relative',top:'100px',left:'300px',fontFamily:'monospace',color:'white' }}>
        
        <Image />
        <Card.Body>
          <Nom />
          <Prix />
          <Description />
        </Card.Body>
      </Card>
    );
  } 
  
  export default CardContainer;