import React from "react";

const S = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Header = () => {
  return (
    <div>
      <header>
        <h1>A heading here</h1>
        <p>Posted by John Doe</p>
        <p>Some additional information here</p>
      </header>
    </div>
  );
};
