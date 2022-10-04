/*
================================================================
Project: Name Tag Generator 

The NameTag.js module is a presentational component that renders
a single name tag. A name tag consists of a static introductory 
text ("Hello" and "my name is"), a dynamic name field, and an
interactive delete functionality (X).

The NameTag component renders a new name tag with the name 
entered by the user in the input field.  

The NameTag component triggers updates to state (data) in the
App component when the user:
- deletes a name tag by clicking on the X in the tag's top
right corner.
================================================================
*/

import React from "react";

const NameTag = (props) => {
  /* Deletes name tag. Passes index of the name tag from the onClick event 
  to the removeName method in the App component: */
  const deleteByIndex = () => props.removeName(props.index);
  return (
    <div className="name-tag">
      <h3 className="title">HELLO</h3>
      <p className="subtitle">my name is</p>
      <h2 className="name">{props.name}</h2>
      <span onClick={deleteByIndex} className="name-tag__delete">
        x
      </span>
    </div>
  );
};

export default NameTag;
