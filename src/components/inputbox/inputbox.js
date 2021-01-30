import React, { useEffect } from "react";
import styled from "styled-components";
import cssValues from "../../utils/cssValues.json";
import { Error } from "../text/text";

const Input = styled.input`
  height: 3rem;
  font-size: 1.25rem;
  width: calc(${(props) => props.width}% - 2rem);
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: ${(props) =>
    props.error || props.alrExist
      ? "solid 2px " + cssValues.colours.red + ";"
      : "solid 2px " + cssValues.colours.darkGray + ";"};
  &:focus {
    outline: none;
  }
`;

const IncrementBtn = styled.input`
  -webkit-appearance: none;
  outline: none;
  height: 3rem;
  width: 3rem;
  font-size: 1rem;
  border-radius: 5px;
  margin: 0 1rem;
  border: 1px solid ${cssValues.colours.lightGray};
  transition: box-shadow 0.3s ease-in-out;
  &:onclick {
    border: 0px solid transparent;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
  &:active {
    box-shadow: 3px 3px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

export const Inputbox = (props) => {
  const {
    width = 100,
    placeholder,
    value,
    name,
    register,
    error,
    alrExist,
  } = props;
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        name={name}
        ref={register}
        error={error}
        alrExist={alrExist}
        width={width}
      />
      <Error>{error && error.message}</Error>
    </div>
  );
};

export const InputboxWithBtn = (props) => {
  const {
    width = 30,
    placeholder,
    value,
    setScore,
    name,
    register,
    error,
  } = props;

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <IncrementBtn
        type="button"
        value="-"
        onClick={() => {
          if (value >= 2) setScore(value - 1);
        }}
      />
      <Input
        placeholder={placeholder}
        value={value}
        name={name}
        ref={register}
        error={error}
        width={width}
      />
      <IncrementBtn
        type="button"
        value="+"
        onClick={() => setScore(value + 1)}
      />

      <Error>{error && error.message}</Error>
    </div>
  );
};
