import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";

class App extends Component {
  state = {
    userName: "Initial UserName"
  };

  updateUserNameHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          updateUserNameHandler={this.updateUserNameHandler}
          userName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
