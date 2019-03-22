import React from "react";
import "./StarWars.css";
const Species = props => {
  return (
    <div>
      <h4>Species Info</h4>
      <p>Species Name: {props.speciesProps.name}</p>
      <p>Classification: {props.speciesProps.classification}</p>
      <p>Designation: {props.speciesProps.designation}</p>
      <p>Language: {props.speciesProps.language}</p>
      <p>Average Lifespan: {props.speciesProps.average_lifespan}</p>
    </div>
  );
};
export default Species;
