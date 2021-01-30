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

  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const [availableLosers, setAvailableLoser] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    const losers = allContestants.filter((contestant) => {
      return contestant._id !== winnerResult;
    });
    setAvailableLoser(losers);
  }, [allContestants, winnerResult]);

  const onSubmit = (data) => {
    if (checkedValues.length === 0) {
      clearErrors();
      setError("loser", {
        type: "manual",
        message: "未㨂邊個輸喎！",
      });
    } else if (checkedValues.length > 3) {
      clearErrors();
      setError("loser", {
        type: "manual",
        message: "你張麻將枱八角形㗎？",
      });
    } else {
      clearErrors();
      setOnDisplay(3);
      setLoserResult(checkedValues);
    }
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
        <Error>{errors.loser && errors.loser.message}</Error>
        <Spacing96 />
        <SameLineWrapper>
          <Back
            onClick={() => {
              setOnDisplay(1);
            }}
            value="返回"
          />
          <Spacing10Horizontal />
          <Submit onClick={onSubmit} value="下一步！" />
        </SameLineWrapper>
      </form>
    </Wrapper>
  );
};

export default LoserSelection;
