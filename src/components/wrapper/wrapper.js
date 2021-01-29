import styled from "styled-components";
import cssValues from "../../utils/cssValues.json";

export const Wrapper = styled.div`
  display: ${(props) => (props.onDisplay ? "block" : "none")};
  background: white;
  border: 0 none;
  border-radius: 2rem;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 5rem 3rem;
  box-sizing: border-box;
  width: 80%;
  margin: 0 10%;
  position: relative;
  text-align: center;
  @media (max-width: ${cssValues.limits.mobileLimit}) {
    margin: 0 0;
    width: 100%;
    border-radius: 0;
    box-shadow: unset;
    padding: 5rem 1rem;
  }
`;

export const MainWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Emoji = styled.div`
  font-size: 5rem;
`;

export const ProgressBar = styled.ul`
  margin-bottom: 30px;
  overflow: hidden;
  counter-reset: step;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: unset;
`;

export const Progress = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  width: 33.33%;
  float: left;
  position: relative;
  color: ${(props) => (props.display ? "black" : "#afafaf")};

  &:before {
    content: counter(step);
    counter-increment: step;
    width: 24px;
    height: 24px;
    line-height: 26px;
    display: block;
    font-size: 12px;
    color: white;
    text-align: center;
    background: ${(props) => (props.display ? "#40c1b7" : "#afafaf")};
    border-radius: 25px;
    margin: 0 auto 10px auto;
  }

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background: ${(props) => (props.display ? "black" : "#afafaf")};
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1;
  }

  &:first-child:after {
    content: none;
  }
`;
