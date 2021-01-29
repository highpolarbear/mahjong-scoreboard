import React from "react";
import { useForm } from "react-hook-form";
import { Back, Submit } from "../../components/button/button";
import { TitleLargeReg, Error } from "../../components/text/text";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";
import { Wrapper, Emoji } from "../../components/wrapper/wrapper";

export const WinnerSelection = (props) => {
  const { onDisplay, setOnDisplay, allContestants, setWinnerResult } = props;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setWinnerResult(data.winner);
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

        {allContestants.map((contestant) => {
          return (
            <div>
              <input
                type="radio"
                name="winner"
                value={contestant._id}
                key={contestant._id}
                ref={register}
              />
              {contestant.name}
            </div>
          );
        })}
        <Spacing96 />
        <Submit
          type="submit"
          onClick={() => {
            setOnDisplay(2);
          }}
          value="下一步！"
        />
      </form>
    </Wrapper>
  );
};

export default WinnerSelection;
