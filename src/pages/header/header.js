import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import cssValues from "../../utils/cssValues.json";

const BaseWrapper = styled.div`
  height: 15vw;
  width: 100%;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 0.5px 14px 0px #cacaca;
  ::before {
    content: "";
    display: block;
    height: 0.3vw;
    background: linear-gradient(to right, #0021e2, #f43d3d);
  }
  margin-bottom: 1vw;
  @media (min-width: ${cssValues.limits.mobileLimit}) {
    height: 4vw;
  }
`;

const LogoGroup = styled.div`
  display: flex;
  margin: 0.6vw auto;
`;

const Logo = styled.img.attrs(() => ({
  src: logo,
  alt: "logo",
}))`
  height: 10vw;
  margin-left: 0.5rem;
  vertical-align: middle;
  @media (min-width: ${cssValues.limits.mobileLimit}) {
    height: 2.5vw;
    margin-left: 1rem;
  }
`;

const Wrapper = styled.div`
  padding-left: 1rem;
`;

const Title = styled.div`
  font-family: zh-bold;
  font-size: 1.25rem;
`;

const Subtitle = styled.div`
  padding-top: 0.5rem;
  font-family: zh-light;
  font-size: 0.8rem;
`;

const Header = () => {
  return (
    <BaseWrapper>
      <div>
        <LogoGroup>
          <Logo />
          <Wrapper>
            <Title>麻將計分器</Title>
            <Subtitle>仲使乜用籌碼啊！</Subtitle>
          </Wrapper>
        </LogoGroup>
      </div>
    </BaseWrapper>
  );
};

export default Header;
