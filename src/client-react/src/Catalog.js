import React, { Component } from "react";
import CatalogFilter from "./CatalogFilter.js";

class Catalog extends Component {
  state = { filter: null, results: [] };

  render() {
    return (
      <div className="Catelog">
        <div className="navMenu">
          <CatalogFilter
            on={this.state.filter === "Titles"}
            name="Titles"
            runFilter={() => this.listBooks()}
            setFilter={name => this.setFilter(name)}
          />
          <CatalogFilter
            on={this.state.filter === "Authors"}
            name="Authors"
            runFilter={() => this.listAuthors()}
            setFilter={name => this.setFilter(name)}
          />
          <CatalogFilter
            on={this.state.filter === "Genres"}
            name="Genres"
            runFilter={() => this.listGenres()}
            setFilter={name => this.setFilter(name)}
          />
          <div>{this.showCatalog()}</div>
        </div>
      </div>
    );
  }

  setFilter(name) {
    this.setState({ filter: name });
    console.log("filter is now", name);
  }

  showCatalog() {
    if (this.state.filter) {
      return this.state.results.map(item => (
        <div className="Book" key={item.id}>
          {item}
        </div>
      ));
    }
    return null;
  }

  listBooks() {
    //TODO fetch from catalog a list of book
  }

  listAuthors() {}

  listGenres() {}
}

export default Catalog;
