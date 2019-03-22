import React from "react";
import "./StarWars.css";
const Character = props => {
  return (
    <div>
      <h3>Name: {props.characterProps.name}</h3>
      <p>Born in Year: {props.characterProps.birth_year}</p>
      <p> Height: {props.characterProps.height}</p>
      <p> Mass: {props.characterProps.mass}</p>
      <p> Gender: {props.characterProps.gender}</p>
    </div>
  );
};
export default Character;
