import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Manu",
        age: 29
      }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: "Manu",
          age: 29
        }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        }
      ]
    });
  };

  togglePersonsHandler = () =>
    this.setState({ showPersons: !this.state.showPersons });

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            Hobbies include racing
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max Power")}
            changed={this.nameChangedHandler}
          >
            Hobbies include swimming
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! I'm a react App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
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
