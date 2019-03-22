import React from "react";
import "./StarWars.css";
const Planet = props => {
  return (
    <div className="planet-info">
      <h4>Home Planet Info</h4>
      <p>Planet Name: {props.homeworldProps.name}</p>
      <p>Planet Climate: {props.homeworldProps.climate}</p>
      <p>Planet Terrain: {props.homeworldProps.terrain}</p>
      <p>Planet Population: {props.homeworldProps.population}</p>
    </div>
  );
};
export default Planet;
