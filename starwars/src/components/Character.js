import React from "react";
import Homeworld from "./Homeworld";
import SpeciesList from "./SpeciesList";
import "./StarWars.css";
const Character = props => {
  return (
    <div ClassName="characters" id="char">
      <h3>Name: {props.characterProps.name}</h3>
      <p>Born in Year: {props.characterProps.birth_year}</p>
      <p> Height: {props.characterProps.height}</p>
      <p> Mass: {props.characterProps.mass}</p>
      <p> Gender: {props.characterProps.gender}</p>
      <Homeworld homeworldProps={props.characterProps.homeworld} />
      <SpeciesList speciesProps={props.characterProps.species} />
    </div>
  );
};
export default Character;
