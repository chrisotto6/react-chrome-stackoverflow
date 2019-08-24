import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Save Me Now</h1>
        <a
          href="https://stackoverflow.com/"
          id="checkPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check this page now!
        </a>
      </div>
    );
  }
}

export default App;
