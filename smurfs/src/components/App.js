import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { getSmurfs } from "../actions/index"

class App extends Component {
  constructor () {
    super();
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.isLoading) {
      return ( <h1> Loading... </h1> )
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <li>{smurfs.name}</li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);
