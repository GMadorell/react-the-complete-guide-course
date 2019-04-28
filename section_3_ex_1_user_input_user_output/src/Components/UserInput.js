import React from "react";

import "./UserInput.css";

export default props => (
  <input
    className="UserInput"
    onChange={props.updateUserNameHandler}
    value={props.userName}
  />
);
