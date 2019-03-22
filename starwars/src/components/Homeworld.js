import React, { Component } from "react";
import Planet from "./Planet";
import "./StarWars.css";
class Homeworld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeworld: []
    };
  }

  componentDidMount() {
    this.getCharacters(this.props.homeworldProps);
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
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return <Planet homeworldProps={this.state.homeworld} />;
  }
}

export default Homeworld;
