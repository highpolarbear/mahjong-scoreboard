import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Back, Submit } from "../../components/button/button";
import { TitleLargeReg, Error } from "../../components/text/text";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";
import { Wrapper, Emoji } from "../../components/wrapper/wrapper";

export const LoserSelection = (props) => {
  const {
    onDisplay,
    setOnDisplay,
    allContestants,
    winnerResult,
    setLoserResult,
  } = props;

  const { register, handleSubmit, errors } = useForm();
  const [checkedValues, setCheckedValues] = useState([]);

  const handleSelect = (checkedId) => {
    const newNames = checkedValues?.includes(checkedId)
      ? checkedValues?.filter((name) => name !== checkedId)
      : [...(checkedValues ?? []), checkedId];
    setCheckedValues(newNames);
    return newNames;
  };

  const onSubmit = (data) => {
    console.log(checkedValues);
    setLoserResult(checkedValues);
  };

  return (
    <Wrapper onDisplay={onDisplay === 2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Emoji>💩</Emoji>
          <Spacing32 />
          <TitleLargeReg>邊個輸啊？</TitleLargeReg>
        </div>
        <Spacing96 />

        {allContestants.map((contestant) => {
          return (
            <div>
              <input
                type="checkbox"
                name={"contestLoser." + contestant._id}
                key={"contestLoser." + contestant._id}
                checked={checkedValues.includes(contestant._id)}
                onChange={() => handleSelect(contestant._id)}
                value={contestant._id}
                ref={register}
              />
              {contestant.name}
            </div>
          );
        })}
        <Spacing96 />
        <Back
          onClick={() => {
            setOnDisplay(1);
          }}
          value="返回"
        />
        <Submit
          type="submit"
          onClick={() => {
            setOnDisplay(3);
          }}
          value="下一步！"
        />
      </form>
    </Wrapper>
  );
};

export default LoserSelection;
