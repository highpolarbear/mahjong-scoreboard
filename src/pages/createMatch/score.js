import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Back, Submit } from "../../components/button/button";
import { TitleLargeReg, Error } from "../../components/text/text";
import {
  Spacing32,
  Spacing96,
  Spacing10Horizontal,
} from "../../components/spacing/spacing";
import Inputbox from "../../components/inputbox/inputbox";
// import Switch from "../../components/switch/switch";
import {
  Wrapper,
  Emoji,
  SameLineWrapper,
} from "../../components/wrapper/wrapper";

export const ScoreSelection = (props) => {
  const { onDisplay, setOnDisplay, winnerResult, loserResult } = props;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    await fetch(process.env.REACT_APP_API_URL + "/log-match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: data.score,
        isSelfDraw: loserResult.length > 1 ? true : false,
        players: {
          winner: winnerResult,
          loser: loserResult,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOnDisplay(4);
      })
      .catch((err) => {
        setOnDisplay(5);
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
            required: "你未寫幾多番喎",
          })}
          error={errors.score}
        />
        <Spacing96 />
        {/* <SameLineWrapper>
          <Switch name="selfDraw" checked={true} register={register} />
          <div>係咪自摸呢？</div>
        </SameLineWrapper> */}
        <Spacing96 />
        <SameLineWrapper>
          <Back
            onClick={() => {
              setOnDisplay(2);
            }}
            value="返回"
          />
          <Spacing10Horizontal />
          <Submit value="完成！" />
        </SameLineWrapper>
      </form>
    </Wrapper>
  );
};

export default ScoreSelection;
