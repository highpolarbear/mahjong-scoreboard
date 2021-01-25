import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cssValues from "../../utils/cssValues.json";
import { TitleLargeReg } from "../../components/text/text";
import hatsu from "../../assets/hatsu.png";
import chun from "../../assets/chun.png";

const Spacing32 = styled.div`
  padding-bottom: 2rem;
`;

const Spacing64 = styled.div`
  padding-bottom: 4rem;
`;

const BaseWrapper = styled.div`
  @media (max-width: ${cssValues.limits.mobileLimit}) {
    padding-left: 1rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderIcon = styled.img`
  height: 2rem;
  border-radius: 3px;
  box-shadow: 0px 4px #107a10;
  margin-right: 1rem;
`;

const Dashboard = () => {
  const [contestants, setContestants] = useState([]);

  useEffect(() => {
    async function getContestants() {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/get-all-user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          return data.result;
        });
      setContestants(response);
    }
    getContestants();
  }, []);

  return (
    <BaseWrapper>
      <Spacing32 />
      <Section>
        <HeaderIcon src={hatsu} alt="" />
        <TitleLargeReg>參賽者</TitleLargeReg>
      </Section>
      {contestants &&
        contestants.map((contestant) => {
          return (
            <div>
              <div>{contestant.name}</div>
              <div>{contestant.score}</div>
            </div>
          );
        })}
      <Spacing64 />
      <Section>
        <HeaderIcon src={chun} alt="" />
        <TitleLargeReg>最近成績</TitleLargeReg>
      </Section>
    </BaseWrapper>
  );
};

export default Dashboard;
