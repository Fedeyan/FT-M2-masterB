import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
export default function App() {
  const [cities, setCities] = useState([]); //preguntar
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'4ae2636d8dfbdc3044bede63951a019b'}&units=metric`).then(
      (respuesta)=>{
        return respuesta.json()
      }
    ).then(
      (data)=>{
      if (data.name) {
        let canSet = true;
        cities.forEach(city=>{
         if (city.id === data.id)
         canSet = false;
        })
        if (canSet) {setCities(oldCities=>[...oldCities,data])} else {
          alert('this city is already on the list')
        }
       } else {
        alert (`No se ha encontrado la ciudad "${ciudad}"`)
       }
      }

    )
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter(c=>{return c.id !==id}))
  }
  return (
    <div className="App">
      {/* Tu código acá: */}
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
  );
}
