import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// class App extends Component{

//   state = {
//     persons:[
//       { name: 'Keshav', age: 23 },
//       { name: 'Aradhana', age: 21 },
//       { name: 'Bharat', age: 55 },
//       { name: 'Shalini', age: 48 }
//     ]
//   };

//   render(){
//     return(
//       this.state.persons.map((person, index)=>{
//         return <Person name={person.name} age={person.age} key={index}/>
//       })
//     )
//   }
// }

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Keshav", age: 23 },
      { name: "Aradhana", age: 21 },
      { name: "Bharat", age: 55 },
      { name: "Shalini", age: 48 },
    ],

    otherState: "other State",
  });

  let [isVisible, setVisible] = useState(true);

  let nameSwitchHandler = () => {
    console.log(personState);
    personState.persons[0].name = "HooooHoooHoo";

    setPersonState({
      persons: [
        { name: "HooooHoooHoo", age: 23 },
        { name: "Aradhana", age: 21 },
        { name: "Bharat", age: 55 },
        { name: "Shalini", age: 48 },
      ],

      otherState: "other State",
    });
  };

  let listVisibilityHandler = () => {
    // if (isVisible)
    //   document.getElementById("personListContainer").style.visibility =
    //     "hidden";
    // else
    //   document.getElementById("personListContainer").style.visibility =
    //     "visible";
    setVisible(!isVisible);
  };

  let nameChangeHandler = (event) => {
    console.log(event.target.value);
    setPersonState({
      persons: [
        { name: `${event.target.value}`, age: 23 },
        { name: "Aradhana", age: 21 },
        { name: "Bharat", age: 55 },
        { name: "Shalini", age: 48 },
      ],

      otherState: "other State",
    });
  };

  const buttonStyle = {
    backgroundColor: "white",
    padding: "0.25rem",
    cursor: "pointer",
    border: "1px solid blue",
    margin: "1rem",
  };

  return (
    <div className="App">
      <h1>App Working</h1>
      <button onClick={nameSwitchHandler} style={buttonStyle}>
        Switch Names
      </button>
      <button onClick={listVisibilityHandler} style={buttonStyle}>
        Change Visibility
      </button>
      {
        isVisible===true ?
        <div id="personListContainer">
          {personState.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={index}
                click={nameSwitchHandler}
                nameChange={nameChangeHandler}
              />
            );
          })}
        </div>: null
      }
    </div>
  );
};

export default App;
