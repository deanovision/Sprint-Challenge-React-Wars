import React from "react";
import "./StarWars.css";
const Character = props => {
  return (
    <div>
      <h2>Name: {props.characterProps.name}</h2>
    </div>
  );
};
export default Character;
