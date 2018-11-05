import React, { Component } from "react";
import ReactDOM from "react-dom";
import Book from "./Book.js";
import "./App.css";

const apiKey = "AIzaSyB4YWu-lpr0OzS6xaaBpUZV0X79sO5QRmc";

class SearchBox extends Component {
  state = {
    typing: false,
    query: "",
    searchRes: null
  };

  componentDidMount() {
    if (this.state.typing) ReactDOM.findDOMNode(this.refs.textDiv).focus();
  }

  componentDidUpdate() {
    if (this.state.typing) ReactDOM.findDOMNode(this.refs.textDiv).focus();
  }

  render() {
    return (
      <div>
        <div className="searchBox">{this.searchContent()}</div>
        {this.showResults()}
      </div>
    );
  }

  searchContent() {
    if (!this.state.typing) {
      return (
        <div className="searchContent" onClick={() => this.startTyping()}>
          Take a look and find a book
          <span className="blinking-cursor">|</span>
        </div>
      );
    } else {
      return (
        <input
          ref="textDiv"
          className="searchContent"
          type="text"
          value={this.state.query}
          onChange={this.queryChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      );
    }
  }

  startTyping() {
    this.setState({ typing: true });
  }

  queryChange(event) {
    this.setState({ query: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      console.log("enter press here! ", this.state.query);
      this.search();
    }
  }

  search() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
        this.state.query +
        "&key=" +
        apiKey,
      {
        method: "get"
      }
    )
      .then(response => {
        if (response) return response.json();
      })
      .then(results => {
        console.log(results.items);
        this.setState({ searchRes: results.items });
      });
  }

  showResults() {
    if (this.state.searchRes) {
      return this.state.searchRes.map(book => <Book data={book} />);
    }
  }
}

export default SearchBox;
