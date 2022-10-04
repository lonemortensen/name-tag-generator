/*
================================================================
Project: Name Tag Generator 

The NameTagList.js module is a presentational component that 
renders a list of name tags. 

The NameTagList component displays all of the user's name tags 
in the UI. 
================================================================
*/

import React from "react";
import NameTag from "./NameTag.js";
import "./styles.css";

const NameTagList = (props) => {
  const renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      removeName={props.removeName}
      index={index}
    />
  );
  const NameTagElements = props.names.map(renderNameTag);
  return <main>{NameTagElements}</main>;
};

export default NameTagList;
