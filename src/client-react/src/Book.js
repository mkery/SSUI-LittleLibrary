import React, { Component } from "react";
import "./App.css";

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <img
          className="BookImage"
          src={this.coverImage()}
          alt={"book cover image of " + this.title()}
        />
        <div className="BookDesc">
          <div className="BookTitle">{this.title()}</div>
          <div className="BookAuthor">
            by {this.props.data.volumeInfo.authors}
          </div>
          <div className="BookUnavilable">Book not in current collection.</div>
        </div>
      </div>
    );
  }

  title() {
    return this.props.data.volumeInfo.title;
  }

  coverImage() {
    let links = this.props.data.volumeInfo.imageLinks;
    if (links) return links.thumbnail;
    else return null;
  }
}

export default Book;
