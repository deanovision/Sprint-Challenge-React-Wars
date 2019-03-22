import React from "react";
import Species from "./Species";
import "./StarWars.css";
class SpeciesList extends React.Component {
  constructor() {
    super();
    this.state = {
      species: []
    };
  }

  componentDidMount() {
    this.getCharacters(this.props.speciesProps);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ species: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  render() {
    return (
      <div>
        <Species speciesProps={this.state.species} />
      </div>
    );
  }
}
export default SpeciesList;
