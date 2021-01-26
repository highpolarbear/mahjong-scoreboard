import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 3rem;
  border-radius: 4rem;
  width: 15rem;
  height: 15rem;
  box-shadow: 20px 30px 30px 0px #cacaca;
  transition: box-shadow 0.3s ease-in-out;
  margin: 0 0 0 1rem;

  &:hover {
    box-shadow: 40px 60px 30px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const RankWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: zh-bold;
  font-size: 4em;
  height: 4rem;
  width: 3rem;
  background-color: white
  text-align: center;
  position: absolute;
  transform: translate(-0.5rem, -2rem);
`;

const Hash = styled.div`
  font-size: 3rem;
`;

const ContentWrapper = styled.div`
  font-family: zh-regular;
  font-size: 1rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Score = styled.div`
  font-family: zh-light;
  font-size: 4rem;
  padding-bottom: 2rem;
`;

const Player = styled.div`
  font-family: zh-regular;
  font-size: 2rem;
`;

export const RankingBox = (props) => {
  const { rank, score, player } = props;
  const formattedScore = score >= 0 ? "+" + score : score;
  return (
    <Wrapper>
      <RankWrapper>
        <Hash>#</Hash>
        {rank}
      </RankWrapper>
      <ContentWrapper>
        <Score>{formattedScore}</Score>
        <Player>{player}</Player>
      </ContentWrapper>
    </Wrapper>
  );
};

export default RankingBox;
