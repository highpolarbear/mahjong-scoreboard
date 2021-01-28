import React from "react";
import styled from "styled-components";

const Button = styled.input`
  -webkit-appearance: none;
  width: 50%;
  height: 3rem;
  background-color: #40c1b7;
  color: white;
  font-size: 1.25rem;
  border: 0px solid transparent;
  border-radius: 30px;
  text-shadow: 0px 0px 0px transparent;
  box-shadow: 0px 10px 15px 0px #cacaca;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const Submit = (props) => {
  const { type, value } = props;
  return <Button type={type} value={value} />;
};

export default Submit;
