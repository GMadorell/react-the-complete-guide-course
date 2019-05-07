import React, { useRef, useEffect, useContext } from "react";

import classes from "./Cockpit.module.css";

import AuthContext from "../../context/auth-context";

function Cockpit(props) {
  const toggleButtonRef = useRef(null); // null bc we can pass initial element if we want
  const authContext = useContext(AuthContext);

  // By passing [] as second parameter, we pass list of prop changes that should affect
  // the hook. As it is empty array, no prop changes will make us call the hook.
  // Therefore, this will only be called once. Similar to onComponentMounted.
  useEffect(() => {
    toggleButtonRef.current.click();
  }, []);

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  let buttonClass = "";
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={buttonClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
}

export default React.memo(Cockpit);
