import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return props.cities.map((element) => {
    return (
      <Card
        key = {element.id}
        name={element.name}
        min={element.main.temp_min}
        max={element.main.temp_max}
        img={element.weather[0].icon}
        onClose={() => alert(element.name)}
      />
    );
  });
}
