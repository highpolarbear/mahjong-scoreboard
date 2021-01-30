import React from "react";
import styled from "styled-components";
import cssValues from "../../utils/cssValues.json";
import { SameLineWrapper } from "../wrapper/wrapper";
import { TitleLargeReg } from "../text/text";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const ToggleBox = styled.label`
  cursor: pointer;
  text-indent: -9999rem;
  display: block;
  position: relative;
  width: 100%;
  height: 10rem;
  border-radius: 2rem;
  border: 1px solid ${cssValues.colours.lightGray};
  margin: 0 20px 20px 0;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 10px 10px 15px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const SelectBox = styled.input`
  display: none;
  &:checked + ${ToggleBox} {
    transition: 0.2s;
    border: 1px solid ${cssValues.colours.darkGray};
    background-color: ${cssValues.colours.ultraLightGray};
    :after {
      left: calc(100% - 0.0625rem);
      transform: translateX(-100%);
    }
  }
`;

const NameBox = styled(TitleLargeReg)`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 10px), calc(-50% - 10px));
`;

export const SingleSelect = (props) => {
  const { allContestants, register } = props;

  return (
    <GridList spacing="20">
      {allContestants.map((contestant) => {
        return (
          <GridListTile>
            <SameLineWrapper>
              <SelectBox
                type="radio"
                name="winner"
                id={contestant._id}
                value={contestant._id}
                key={contestant._id}
                ref={register}
              />

              <ToggleBox for={contestant._id}>Toggle</ToggleBox>
              <NameBox>{contestant.name}</NameBox>
            </SameLineWrapper>
          </GridListTile>
        );
      })}
    </GridList>
  );
};

export const MultipleSelect = (props) => {
  const { contestants, register, checkedValues, setCheckedValues } = props;

  const handleSelect = (checkedId) => {
    const newNames = checkedValues?.includes(checkedId)
      ? checkedValues?.filter((name) => name !== checkedId)
      : [...(checkedValues ?? []), checkedId];
    setCheckedValues(newNames);
    return newNames;
  };

  return (
    <GridList spacing="20">
      {contestants.map((contestant) => {
        return (
          <GridListTile>
            <SameLineWrapper>
              <SelectBox
                type="checkbox"
                name={"contestLoser." + contestant._id}
                id={contestant._id}
                checked={checkedValues.includes(contestant._id)}
                value={contestant._id}
                key={contestant._id}
                ref={register}
              />

              <ToggleBox
                for={contestant._id}
                onClick={() => handleSelect(contestant._id)}
              >
                Toggle
              </ToggleBox>
              <NameBox>{contestant.name}</NameBox>
            </SameLineWrapper>
          </GridListTile>
        );
      })}
    </GridList>
  );
};
