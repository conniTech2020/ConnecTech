import React from "react";

// function Input(props) {
//   return <input type={props.type} placeholder={props.placeholder} />;
// }

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${(props) => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

// how to use
{/* <Input small placeholder="Small" />
<Input placeholder="Normal" />
<Input padding="2em" placeholder="Padded" /> */}


export default Input;
