import React, { Component } from "react";
import "./App.scss";
import AppView from "./views/app-view.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppView />
      </div>
    );
  }
}

export default App;
