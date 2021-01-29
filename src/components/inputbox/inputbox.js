import React from "react";
import styled from "styled-components";
import { Error } from "../text/text";

const Input = styled.input`
  height: 3rem;
  font-size: 1.25rem;
  width: calc(100% - 2rem);
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: solid 20px red;
  border: ${(props) =>
    props.error || props.alrExist ? "solid 2px red;" : "solid 2px black;"};
  &:focus {
    outline: none;
  }
`;

const Inputbox = (props) => {
  const { placeholder, value, name, register, error, alrExist } = props;
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        name={name}
        ref={register}
        error={error}
        alrExist={alrExist}
      />
      <Error>{error && "好似未填好你個大名喎"}</Error>
    </div>
  );
};

export default Inputbox;
