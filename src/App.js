import React from 'react';
import "./App.css";
import axios from "axios";
import User from "./components/User";
import Follower from "./components/Follower";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Sofie's Github Card</h1>
        <User />
        <Follower />
      </div>
    );
  }
}


export default App;
