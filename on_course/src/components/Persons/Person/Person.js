import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  inputElementRef = React.createRef();

  static contextType = AuthContext; // you now get auth-context in this.context property

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <div className={classes.Person}>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Not Authenticated :(</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElementRef}
        />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
