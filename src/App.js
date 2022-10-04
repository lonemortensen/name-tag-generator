/*
================================================================
Project: Name Tag Generator 
Description: An interactive web application built with React JS.
With this app, users can:
- create and customize new name tags based on their name input
- delete name tags
Background: Course work for Skillcrush's "Introduction to 
JavaScript React" course. 
                            
===== *** =====

The App.js module is a stateful component that contains the app's 
data logic and delegates rendering logic to and data access for 
the app's presentational components and one other stateful 
component. 

The App component manages the name tags as created and deleted 
by the user, and the names for the tags as entered in the text 
input field by the user. 

Name tags are saved to/retrieved from the browser's local storage 
from session to session.  
================================================================
*/

import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  //State is updated with the user's entered names from the UserInput component:
  state = {
    names: []
  };

  /* Adds a new name when user enters a name in the input field
  and clicks the Create Name Tag button: */

  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  //Removes a name tag when the user clicks on X:

  removeName = (clickedIndex) => {
    /* filterCallback removes the clicked index (name) from the array. 
    A new array is created without the clicked name: */
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  //Saves name tags to the browser's local storage:

  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
  }

  //Retrieves saved name tags from the browser's local storage when the browser re-opens:

  componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
