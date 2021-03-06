import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import cssValues from "../../utils/cssValues.json";
import { Submit } from "../../components/button/button";
import { TitleLargeReg } from "../../components/text/text";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";
import {
  Wrapper,
  MainWrapper,
  Emoji,
  ProgressBar,
  Progress,
} from "../../components/wrapper/wrapper";
import WinnerSelection from "./winner";
import LoserSelection from "./loser";
import ScoreSelection from "./score";

const CreateMatch = () => {
  const [onDisplay, setOnDisplay] = useState(1);
  const [allContestants, setAllContestants] = useState([]);
  const [winnerResult, setWinnerResult] = useState("");
  const [loserResult, setLoserResult] = useState([]);

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
          // Sort entries by score
          return data.result.sort(function (a, b) {
            return b.score - a.score;
          });
        });

      setAllContestants(response);
    }
    getContestants();
  }, []);

  const history = useHistory();

  return (
    <MainWrapper>
      <ProgressBar id="progressbar">
        <Progress display={onDisplay >= 1}>選擇贏家</Progress>
        <Progress display={onDisplay >= 2}>選擇輸家</Progress>
        <Progress display={onDisplay >= 3}>番數</Progress>
        <Progress display={onDisplay >= 4}>完成</Progress>
      </ProgressBar>

      <WinnerSelection
        onDisplay={onDisplay}
        setOnDisplay={setOnDisplay}
        allContestants={allContestants}
        setWinnerResult={setWinnerResult}
      />

      <LoserSelection
        onDisplay={onDisplay}
        setOnDisplay={setOnDisplay}
        allContestants={allContestants}
        winnerResult={winnerResult}
        setLoserResult={setLoserResult}
      />

      <ScoreSelection
        onDisplay={onDisplay}
        setOnDisplay={setOnDisplay}
        winnerResult={winnerResult}
        loserResult={loserResult}
      />

      <Wrapper onDisplay={onDisplay === 4}>
        <div>
          <Emoji>✅</Emoji>
          <Spacing32 />
          <TitleLargeReg>搞掂！</TitleLargeReg>
          <Spacing32 />
          <TitleLargeReg>已經記低咗喇！</TitleLargeReg>
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

      <Wrapper onDisplay={onDisplay === 5}>
        <div>
          <Emoji>⛔️</Emoji>
          <Spacing32 />
          <TitleLargeReg>出錯喇！</TitleLargeReg>
          <Spacing32 />
          <TitleLargeReg>再試多次啦！</TitleLargeReg>
        </div>
        <Spacing96 />
        <Submit
          type="submit"
          onClick={() => {
            history.go(0);
          }}
          value="再試一次"
        />
      </Wrapper>
    </MainWrapper>
  );
};

export default CreateMatch;
