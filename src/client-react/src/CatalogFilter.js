import React, { Component } from "react";

class CatalogFilter extends Component {
  render() {
    if (this.props.on)
      return (
        <div className="menuItem active" onClick={() => this.filterOff()}>
          {this.props.name}
        </div>
      );
    else
      return (
        <div className="menuItem" onClick={() => this.filterOn()}>
          {this.props.name}
        </div>
      );
  }

  filterOn() {
    this.props.runFilter();
    this.props.setFilter(this.props.name);
  }

  filterOff() {
    this.props.setFilter(null);
  }
}

export default CatalogFilter;
