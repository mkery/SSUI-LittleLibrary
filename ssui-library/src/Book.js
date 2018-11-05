import React, { Component } from "react";
import "./App.css";

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <img className="BookImage" src={this.showImage()} />
        <div className="BookDesc">
          <div className="BookTitle">{this.props.data.volumeInfo.title}</div>
          <div className="BookAuthor">
            by {this.props.data.volumeInfo.authors}
          </div>
          <div className="BookUnavilable">Book not in current collection.</div>
        </div>
      </div>
    );
  }

  showImage() {
    let links = this.props.data.volumeInfo.imageLinks;
    if (links) return links.thumbnail;
    else return null;
  }
}

export default Book;
