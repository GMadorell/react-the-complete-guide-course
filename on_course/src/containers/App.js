import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      {
        id: "id1",
        name: "Max",
        age: 28
      },
      {
        id: "id2",
        name: "Manu",
        age: 29
      },
      {
        id: "id3",
        name: "Stephanie",
        age: 26
      }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === personId
    );

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () =>
    this.setState({ showPersons: !this.state.showPersons });

  render() {
    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

/*
 * Version with hooks below
 */

// function App() {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: "Max",
//         age: 28
//       },
//       {
//         name: "Manu",
//         age: 29
//       }
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {
//           name: "Max with name change",
//           age: 28
//         },
//         {
//           name: "Manu",
//           age: 29
//         }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi! I'm a react App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       >
//         Hobbies include racing
//       </Person>
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         Hobbies include swimming
//       </Person>
//     </div>
//   );
// }

// export default App;