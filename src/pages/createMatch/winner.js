import React from "react";
import { useForm } from "react-hook-form";
import { Submit } from "../../components/button/button";
import { TitleLargeReg, Error } from "../../components/text/text";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";
import { SingleSelect } from "../../components/select/select";
import { Wrapper, Emoji } from "../../components/wrapper/wrapper";

export const WinnerSelection = (props) => {
  const { onDisplay, setOnDisplay, allContestants, setWinnerResult } = props;

  const { register, handleSubmit, errors, setError } = useForm();

  const onSubmit = (data) => {
    if (!data.winner) {
      setError("winner", {
        type: "manual",
        message: "未㨂邊個贏喎！",
      });
    } else {
      setWinnerResult(data.winner);
      setOnDisplay(2);
    }
  };

  return (
    <Wrapper onDisplay={onDisplay === 1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Emoji>🎉</Emoji>
          <Spacing32 />
          <TitleLargeReg>邊個贏啊？</TitleLargeReg>
        </div>
        <Spacing96 />
        <SingleSelect allContestants={allContestants} register={register} />
        <Error>{errors.winner && errors.winner.message}</Error>
        <Spacing96 />
        <Submit type="submit" value="下一步！" />
      </form>
    </Wrapper>
  );
};

export default WinnerSelection;
