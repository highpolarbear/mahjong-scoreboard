import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Back, Submit } from "../../components/button/button";
import { TitleLargeReg, Error } from "../../components/text/text";
import {
  Spacing32,
  Spacing96,
  Spacing10Horizontal,
} from "../../components/spacing/spacing";
import {
  Wrapper,
  Emoji,
  SameLineWrapper,
} from "../../components/wrapper/wrapper";
import { MultipleSelect } from "../../components/select/select";

export const LoserSelection = (props) => {
  const {
    onDisplay,
    setOnDisplay,
    allContestants,
    winnerResult,
    setLoserResult,
  } = props;

  const { register, handleSubmit, errors } = useForm();
  const [availableLosers, setAvailableLoser] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    const losers = allContestants.filter((contestant) => {
      return contestant._id != winnerResult;
    });
    setAvailableLoser(losers);
  }, [winnerResult]);

  const onSubmit = (data) => {
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

        <MultipleSelect
          contestants={availableLosers}
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
          register={register}
        />

        {/* {availableLosers.map((contestant) => {
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
        })} */}
        <Spacing96 />
        <SameLineWrapper>
          <Back
            type="submit"
            onClick={() => {
              setOnDisplay(1);
            }}
            value="返回"
          />
          <Spacing10Horizontal />
          <Submit
            type="submit"
            onClick={() => {
              setOnDisplay(3);
            }}
            value="下一步！"
          />
        </SameLineWrapper>
      </form>
    </Wrapper>
  );
};

export default LoserSelection;
