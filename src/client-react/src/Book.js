import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <img
          className="BookImage"
          src={this.coverImage()}
          alt={"book cover image of " + this.props.data.title}
        />
        <div className="BookDesc">
          <div className="BookTitle">{this.props.data.title}</div>
          <div className="BookAuthor">by {this.props.data.authors}</div>
          <div className="BookUnavilable">Book not in current collection.</div>
        </div>
      </div>
    );
  }

  coverImage() {
    let links = this.props.data.imageLinks;
    if (links) return links.thumbnail;
    else return null;
  }
}

export default Book;
