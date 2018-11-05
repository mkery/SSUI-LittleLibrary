import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

class SearchBox extends Component {
  state = {
    typing: false,
    query: ""
  };

  componentDidMount() {
    if (this.state.typing) ReactDOM.findDOMNode(this.refs.textDiv).focus();
  }

  componentDidUpdate() {
    if (this.state.typing) ReactDOM.findDOMNode(this.refs.textDiv).focus();
  }

  render() {
    return <div className="searchBox">{this.searchContent()}</div>;
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
    if (event.key == "Enter") {
      console.log("enter press here! ", this.state.query);
    }
  }
}

export default SearchBox;
