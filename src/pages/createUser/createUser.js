import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import cssValues from "../../utils/cssValues.json";
import Inputbox from "../../components/inputbox/inputbox";
import { Submit } from "../../components/button/button";
import { TitleLargeReg, Error } from "../../components/text/text";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";
import {
  Wrapper,
  MainWrapper,
  Emoji,
  ProgressBar,
  Progress,
} from "../../components/wrapper/wrapper";

export const CreateUser = () => {
  const { register, handleSubmit, errors } = useForm();
  const [onDisplay, setOnDisplay] = useState(1);
  const [errAlrExist, setErrAlrExist] = useState(false);
  const history = useHistory();

  const onSubmit = async (data) => {
    await fetch(process.env.REACT_APP_API_URL + "/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setOnDisplay(2);
      })
      .catch((err) => {
        setErrAlrExist(true);
      });
  };

  return (
    <MainWrapper>
      <ProgressBar id="progressbar">
        <Progress display={onDisplay >= 1}>輸入名稱</Progress>
        <Progress display={onDisplay >= 2}>完成</Progress>
      </ProgressBar>
      <Wrapper onDisplay={onDisplay === 1}>
        <div>
          <Emoji>👋🏻</Emoji>
          <Spacing32 />
          <TitleLargeReg>Hello！</TitleLargeReg>
          <Spacing32 />
          <TitleLargeReg>你叫咩名啊？</TitleLargeReg>
        </div>
        <Spacing96 />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Inputbox
            placeholder="話我知你叫咩名啦！例：靚仔"
            name="name"
            register={register({
              required: true,
            })}
            alrExist={errAlrExist}
            error={errors.name}
          />
          {errAlrExist && (
            <Error>好似有人用咗呢個名喇喎，試下用其他名啦！</Error>
          )}
          <Spacing96 />
          <Submit type="submit" value="搞掂喇！" />
        </form>
      </Wrapper>
      <Wrapper onDisplay={onDisplay === 2}>
        <div>
          <Emoji>✅</Emoji>
          <Spacing32 />
          <TitleLargeReg>搞掂！</TitleLargeReg>
          <Spacing32 />
          <TitleLargeReg>贏多啲喇！</TitleLargeReg>
        </div>
        <Spacing96 />
        <Submit
          type="submit"
          onClick={() => {
            history.push("/dashboard");
          }}
          value="返主頁"
        />
      </Wrapper>
    </MainWrapper>
  );
};

export default CreateUser;

// current_fs.animate({opacity: 0}, {
//   step: function(now, mx) {
//     //as the opacity of current_fs reduces to 0 - stored in "now"
//     //1. scale current_fs down to 80%
//     scale = 1 - (1 - now) * 0.2;
//     //2. bring next_fs from the right(50%)
//     left = (now * 50)+"%";
//     //3. increase opacity of next_fs to 1 as it moves in
//     opacity = 1 - now;
//     current_fs.css({
//       'transform': 'scale('+scale+')',
//       'position': 'absolute'
//     });
//     next_fs.css({'left': left, 'opacity': opacity});
//   },
//   duration: 800,
//   complete: function(){
//     current_fs.hide();
//     animating = false;
//   },
//   //this comes from the custom easing plugin
//   easing: 'easeInOutBack'
// });
