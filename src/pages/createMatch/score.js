import React from "react";
import { useForm } from "react-hook-form";
import { Back, Submit } from "../../components/button/button";
import { TitleLargeReg, Error } from "../../components/text/text";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";
import Inputbox from "../../components/inputbox/inputbox";
import { Wrapper, Emoji } from "../../components/wrapper/wrapper";

export const ScoreSelection = (props) => {
  const {
    onDisplay,
    setOnDisplay,
    score,
    winnerResult,
    loserResult,
    setScore,
    selfDraw,
    setSelfDraw,
  } = props;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setScore(data.score);

    await fetch(process.env.REACT_APP_API_URL + "/log-match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: data.score,
        isSelfDraw: selfDraw,
        players: {
          winner: winnerResult,
          loser: loserResult,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOnDisplay(4);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrapper onDisplay={onDisplay === 3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Emoji>🀄️</Emoji>
          <Spacing32 />
          <TitleLargeReg>幾多番？</TitleLargeReg>
        </div>
        <Spacing96 />
        <Inputbox
          placeholder="番數"
          name="score"
          register={register({
            required: true,
          })}
          error={errors.score}
        />
        <Spacing96 />
        <Back
          onClick={() => {
            setOnDisplay(2);
          }}
          value="返回"
        />
        <Submit type="submit" value="完成！" />
      </form>
    </Wrapper>
  );
};

export default ScoreSelection;
