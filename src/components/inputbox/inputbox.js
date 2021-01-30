import React from "react";
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

const Inputbox = (props) => {
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

export default Inputbox;
