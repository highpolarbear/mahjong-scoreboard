import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import cssValues from "../../utils/cssValues.json";
import { Title, Subtitle } from "../../components/text/text";

const BaseWrapper = styled.div`
  height: 5rem;
  width: 100%;
  z-index: 99;
  background-color: ${cssValues.colours.white};
  box-shadow: 0px 0.5px 14px 0px #cacaca;
  position: fixed;
  top: 0;
  ::before {
    content: "";
    display: block;
    @media (min-width: ${cssValues.limits.mobileLimit}) {
      height: 0.5rem;
    }
    height: 1rem;
    background: linear-gradient(to right, #03897f, #40c1b7, #04bfb1, #ffffff);
  }
  margin-bottom: 2rem;
  @media (min-width: ${cssValues.limits.mobileLimit}) {
    height: 4rem;
  }
`;

const MainWrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const LogoGroup = styled.div`
  display: flex;
  margin: 0.5rem 0;
  overflow: hidden;
  float: left;
  &:hover {
    cursor: pointer;
  }
`;

const MenuGroup = styled.div`
  display: none;
  float: right;
  @media (min-width: ${cssValues.limits.mobileLimit}) {
    display: flex;
  }
`;

const MenuItem = styled.div`
  display: inline-block;
  position: relative;
  margin: auto;
  padding: 0 1rem;
`;

const Link = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img.attrs(() => ({
  src: logo,
  alt: "logo",
}))`
  height: 2.5rem;
  margin: auto 0 auto 0.5rem;
  @media (min-width: ${cssValues.limits.mobileLimit}) {
    margin: auto 0;
  }
`;

const Wrapper = styled.div`
  padding-left: 1rem;
`;

const Header = () => {
  const history = useHistory();
  return (
    <BaseWrapper>
      <MainWrapper>
        <div>
          <LogoGroup onClick={() => history.push("/")}>
            <Logo />
            <Wrapper>
              <Title>麻將計分器</Title>
              <Subtitle>仲使乜用籌碼啊！</Subtitle>
            </Wrapper>
          </LogoGroup>
          <MenuGroup>
            <MenuItem>
              <Link onClick={() => history.push("/")}>
                <p>主頁</p>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link onClick={() => history.push("/create-user")}>
                <p>增加玩家</p>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link onClick={() => history.push("/create-match")}>
                <p>記錄賽果</p>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link onClick={() => history.push("/")}>
                <p>番數表</p>
              </Link>
            </MenuItem>
          </MenuGroup>
        </div>
      </MainWrapper>
    </BaseWrapper>
  );
};

export default Header;
