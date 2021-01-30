import React from "react";
import styled from "styled-components";

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999rem;
  width: 2.5rem;
  height: 1.25rem;
  background: grey;
  display: block;
  border-radius: 6.25rem;
  position: relative;
  transform: translate(0%, -100%);

  &:after {
    content: "";
    position: absolute;
    top: 0.0625rem;
    left: 0.0625rem;
    width: 1.125rem;
    height: 1.125rem;
    background: #fff;
    border-radius: 1.125rem;
    transition: 0.2s;
  }
`;

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${Label} {
    background: #8dd07b;
    :after {
      left: calc(100% - 0.0625rem);
      transform: translateX(-100%);
    }
  }
`;

export const Switch = (props) => {
  const { name, register } = props;
  return (
    <div>
      <Input type="checkbox" id="switch" name={name} ref={register} />
      <Label for="switch">Toggle</Label>
    </div>
  );
};

export default Switch;
