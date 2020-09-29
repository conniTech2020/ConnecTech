import React, { Component } from "react";
import styled from "styled-components";

const SButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Button(props) {
  return <SButton>{props.name}</SButton>;
}

// return(
// <div>
// <SButton>{props.name}</SButton>
// {/* <SButton primary>Primary</SButton> */}

export default Button;
