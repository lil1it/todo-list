import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <Btn {...rest}>{children}</Btn>;
};

export default Button;

const Btn = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  box-shadow:blueviolet 5px 5px 15px ;
  background-color:w;
  color: #000000;
  font-weight: bold;
  margin-left: 1.5rem;
  font-family: Verdana, eneva, Tahoma, sans-serif;
  &:active {
    background-color: #971bef;
    font-size: small;
  }
`;
