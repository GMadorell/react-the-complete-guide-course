import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    userInput: ""
  };

  userInputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  removeUserInputCharacterAt = index => {
    const modifiedUserInput = this.state.userInput.split("");
    modifiedUserInput.splice(index, 1);
    this.setState({ userInput: modifiedUserInput.join("") });
  };

  render() {
    const characterDisplays = this.state.userInput
      .split("")
      .map((character, index) => {
        return (
          <CharacterDisplay
            character={character}
            key={index}
            clicked={() => this.removeUserInputCharacterAt(index)}
          />
        );
      });

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.userInputChangedHandler}
        />
        <p>User input is: {this.state.userInput}</p>
        <Validation text={this.state.userInput} />
        {characterDisplays}
      </div>
    );
  }
}

const Validation = props => {
  const validatedText =
    props.text.length >= 5 ? "Text long enough" : "Text too short";
  return <p>{validatedText}</p>;
};

const CharacterDisplay = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <p style={style} onClick={props.clicked}>
      {props.character}
    </p>
  );
};

export default App;
