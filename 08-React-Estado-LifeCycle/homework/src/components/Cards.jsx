import React from 'react';
import Styles from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={Styles.div}>
        {cities.map(c => <Card
            key={c.id}
            max={Math.round(c.main.temp_max)}
            min={Math.round(c.main.temp_min)}
            name={c.name}
            img={c.weather[0].icon}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div className={Styles.div}>Sin ciudades</div>
    )
  }
}
