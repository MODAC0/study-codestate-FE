import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  background: ${(props) => props.color || "white"};
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;

const Button = ({ color, size, text }) => (
  <StyleButton color={color} size={size}>
    {text}
  </StyleButton>
);

export default Button;
