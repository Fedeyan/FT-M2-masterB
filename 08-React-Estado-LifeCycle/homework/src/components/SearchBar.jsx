import React, { useState } from "react";
import Styles from "./Nav.module.css";

export default function SearchBar({ onSearch }) {
  
  const [input,setInput] = useState('')


  function onSubmit(event) {
    if (input) {
      event.preventDefault();
      onSearch(input)
      setInput('')
    } else{
      alert('Debe ingresar su busqueda')
    }
  
  }
  const formatoDeInput =()=> {


  }

  const onInputChange =(e)=> {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={(event)=> onSubmit(event) }>
      <input value={input} className={Styles.bar} type="text" placeholder="Ciudad..." onChange={(e)=>{onInputChange(e)}} />
      <input className={Styles.button} type="submit" value="Agregar" />
    </form>
  );
}
