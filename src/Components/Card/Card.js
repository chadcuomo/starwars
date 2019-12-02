import React from 'react';
import './card.css';

const Card = ({ name, image }) => {

  let imagePath = '';
  try {
    require(`../../images/${image}.jpg`);
    imagePath = image + '.jpg';
  }
  catch (err) {
    try {
      require(`../../images/${image}.png`)
      imagePath = image + '.png';
    }
    catch (err) {
      imagePath = 'default.jpg';
    }
  }
 

  
  return (
    <div className='card'>
      <img alt='person' src ={require(`../../images/${imagePath}`)} />
      <h3>{name}</h3>
    </div>
  );
}

export default Card;