import React from "react";

const userOutputCss = {
  paddingTop: "30px",
  border: "1px solid"
};

export default props => (
  <div style={userOutputCss}>
    <p>First Paragraph - username is {props.userName} </p>
    <p>Second Paragraph - username is {props.userName} </p>
  </div>
);
