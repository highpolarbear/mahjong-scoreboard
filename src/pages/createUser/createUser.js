import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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
        history.push("/dashboard");
      })
      .catch((err) => {
        setErrAlrExist(true);
      });
  };

  useEffect(() => {
    if (errAlrExist) {
      alert("好似有人用咗呢個名喇喎，試下用其他名啦！");
      setErrAlrExist(false);
    }
  }, [errAlrExist]);
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
