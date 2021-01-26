import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import cssValues from "../../utils/cssValues.json";
import Inputbox from "../../components/inputbox/inputbox";
import Submit from "../../components/button/button";
import { TitleLargeReg } from "../../components/text/text";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";

const Wrapper = styled.div`
  text-align: center;
  @media (max-width: ${cssValues.limits.mobileLimit}) {
    margin: 0 0.3rem;
  }
`;

const Header = styled.div``;

const Emoji = styled.div`
  font-size: 5rem;
`;

const CreateUser = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/create-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log(response);
  };
  return (
    <Wrapper>
      <Header>
        <Emoji>👋🏻</Emoji>
        <Spacing32 />
        <TitleLargeReg>Hello！你叫咩名啊？</TitleLargeReg>
      </Header>
      <Spacing96 />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputbox
          placeholder="話我知你叫咩名啦！例：靚仔"
          name="name"
          register={register({
            required: true,
          })}
          error={errors.name}
        />
        <Spacing96 />
        <Submit type="submit" value="搞掂喇！" />
      </form>
    </Wrapper>
  );
};

export default CreateUser;
