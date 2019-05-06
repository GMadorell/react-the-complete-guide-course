import React from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default person;
