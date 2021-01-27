import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import cssValues from "../../utils/cssValues.json";
import { TitleLargeReg, Link } from "../../components/text/text";
import RankingBox from "../../components/rankingbox/rankingbox";
import hatsu from "../../assets/hatsu.png";
import chun from "../../assets/chun.png";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";

const BaseWrapper = styled.div`
  @media (max-width: ${cssValues.limits.mobileLimit}) {
    padding: 0 1rem;
  }
  padding-bottom: 5rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
`;

const HeaderIcon = styled.img`
  height: 2rem;
  border-radius: 3px;
  box-shadow: 0px 4px #107a10;
  margin-right: 1rem;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Section = styled.div`
  @media (min-width: ${cssValues.limits.mobileLimit}) {
    box-shadow: 0px 30px 60px 0px #cacaca;
    transition: box-shadow 0.3s ease-in-out;
    padding: 4rem;
    border-radius: 5rem;
  }
`;

const EmptyWarningText = styled.div`
  margin: 5rem auto;
  text-align: center;
  font-family: zh-light;
  font-size: 2rem;
  color: #888888;
`;

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: "23rem",
  },
  gridListTile: {
    position: "relative",
    float: "left",
    overflow: "hidden",
    height: "100% !important",
    [theme.breakpoints.up(cssValues.limits.mobileLimit.slice(0, -2))]: {
      marginRight: "-3.5rem",
    },
  },
}));

const Dashboard = (props) => {
  const [contestants, setContestants] = useState([]);
  const classes = useStyles();
  const history = useHistory();

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
          return data.result.sort(function (a, b) {
            return b.score - a.score;
          });
        });

      console.log(response);
      setContestants(response);
    }
    getContestants();
  }, []);

  function Players() {
    const theme = useTheme();
    const matches = useMediaQuery(
      theme.breakpoints.up(cssValues.limits.mobileLimit.slice(0, -2))
    );
    return (
      <div>
        {contestants.length === 0 ? (
          <EmptyWarningText>好似未有人喎</EmptyWarningText>
        ) : (
          <GridList className={classes.gridList} cols={matches ? 2.5 : 1}>
            {contestants.map((contestant, index) => {
              return (
                <GridListTile
                  className={classes.gridListTile}
                  key={contestant._id}
                >
                  <RankingBox
                    rank={index + 1}
                    score={contestant.score}
                    player={contestant.name}
                    key={contestant._id}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        )}
      </div>
    );
  }

  return (
    <BaseWrapper>
      <Spacing32 />
      <Section>
        <Header>
          <HeaderTitle>
            <HeaderIcon src={hatsu} alt="" />
            <TitleLargeReg>參賽者</TitleLargeReg>
          </HeaderTitle>
          <Link
            onClick={() => {
              history.push("/create-user");
            }}
          >
            + 增加玩家
          </Link>
        </Header>
        <Players />
      </Section>
      <Spacing96 />
      <Section>
        <Header>
          <HeaderTitle>
            <HeaderIcon src={chun} alt="" />
            <TitleLargeReg>最近賽事</TitleLargeReg>
          </HeaderTitle>
          <Link
            onClick={() => {
              history.push("/create-user");
            }}
          >
            + 記錄賽果
          </Link>
        </Header>
      </Section>
    </BaseWrapper>
  );
};

export default Dashboard;
