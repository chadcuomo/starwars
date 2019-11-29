import React from 'react';
import Card from '../Card/Card'


const CardList2 = ({ people }) => {
  return (
    <div>
      {
        people.map((user, i) => {
          return (
            <Card
            key={i}
            name={people[i].name}
            gender={people[i].gender}
            birth_year={people[i].birth_year}
            hair_color={people[i].hair_color}
            height={people[i].height}
            mass={people[i].mass}
            image={people[i].name}
            bio={people[i].name}
           
            />
           
            


          );
          
        })
        
      }
      
      
    </div>
  );
}



export default CardList2;