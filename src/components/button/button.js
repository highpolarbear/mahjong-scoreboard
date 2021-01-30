import React from "react";
import styled from "styled-components";
import cssValues from "../../utils/cssValues.json";

const SubmitBtn = styled.input`
  -webkit-appearance: none;
  outline: none;
  width: 45%;
  height: 4rem;
  background-color: ${cssValues.colours.brandBlue};
  color: ${cssValues.colours.white};
  font-size: 1.25rem;
  border: 0px solid transparent;
  border-radius: 30px;
  text-align: center;
  text-shadow: 0px 0px 0px transparent;
  box-shadow: 0px 10px 15px 0px #cacaca;
  transition: box-shadow 0.3s ease-in-out;
  caret-color: transparent;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
  &:active {
    cursor: pointer;
    box-shadow: 3px 3px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const BackBtn = styled.input`
  -webkit-appearance: none;
  outline: none;
  width: 45%;
  height: 4rem;
  background-color: ${cssValues.colours.lightGray};
  color: ${cssValues.colours.black};
  font-size: 1.25rem;
  border: 0px solid transparent;
  border-radius: 30px;
  text-align: center;
  text-shadow: 0px 0px 0px transparent;
  box-shadow: 0px 10px 15px 0px #cacaca;
  transition: box-shadow 0.3s ease-in-out;
  caret-color: transparent;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
  &:active {
    cursor: pointer;
    box-shadow: 3px 3px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

export const Back = (props) => {
  const { type, value, onClick } = props;
  return <BackBtn type={type} value={value} onClick={onClick} />;
};

export const Submit = (props) => {
  const { type, value, onClick } = props;
  return <SubmitBtn type={type} value={value} onClick={onClick} />;
};
