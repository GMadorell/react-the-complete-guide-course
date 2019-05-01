import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";

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
    let buttonClass = "";

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );
      buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi! I'm a react App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
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
