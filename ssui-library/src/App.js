import React, { Component } from "react";
import "./App.css";
import SearchBox from "./SearchBox.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="logo" />
        <div className="title">Paper & Words</div>
        <div className="subtitle">
          a free library traveling book truck of Pittsburgh, PA
        </div>
        <SearchBox />
      </div>
    );
  }
}

export default App;
