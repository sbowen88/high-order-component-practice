import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import People from "./People";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.setState({
        people: res.data.results
      });
    });
  }
  render() {
    return (
      <div className="App">
        <People people={this.state.people} loading ={this.state.people.length===0} />
      </div>
    );
  }
}

export default App;
