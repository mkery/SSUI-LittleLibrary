import React, { Component } from "react";
import SearchBox from "./SearchBox.js";
import Catalog from "./Catalog.js";

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
        <br />
        <div className="subtitle">Browse Our Collection</div>
        <Catalog />
      </div>
    );
  }
}

export default App;
