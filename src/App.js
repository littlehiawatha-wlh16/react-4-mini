import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes'
import "./App.css";

class App extends Component {
  render() {
    //console.log(this.props)
    return (
      <Router>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
