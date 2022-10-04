/*
================================================================
Project: Name Tag Generator 

The UserInput.js module is a stateful component that manages a
single name entered by the user in the input field. The component 
renders a text input field and a submit button.

The UserInput component's event listeners trigger updates to 
its state when users:
- type in the text input field to add a name for a new name tag
- click on the button to create a new name tag. 
================================================================
*/

import React, { Component } from "react";

class UserInput extends Component {
  //Keeps the state of the name of a SINGLE name tag:
  state = {
    name: ""
  };

  /* Updates this component's state with the name typed by 
  the user in the input field: */

  updateName = (event) => {
    this.setState({ name: event.target.value });
  };

  /* Passes the name saved to this component's state to the addName 
  method in the App component when user clicks the submit button. 
  Then clears the input field: */

  handleSubmit = (event) => {
    //Prevents page reload:
    event.preventDefault();
    this.props.addName(this.state.name);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a new name here..."
            // Displays the name the user types in input field:
            value={this.state.name}
            onChange={this.updateName}
          />
          <input type="submit" value="Create Name Tag" />
        </form>
      </div>
    );
  }
}

export default UserInput;
