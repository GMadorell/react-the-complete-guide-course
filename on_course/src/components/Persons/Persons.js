import React, { Component } from "react";

import Person from "./Person/Person";

export default class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          key={person.id}
        />
      );
    });
  }
}
