import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import cssValues from "../../utils/cssValues.json";
import { TitleLargeReg } from "../../components/text/text";
import RankingBox from "../../components/rankingbox/rankingbox";
import hatsu from "../../assets/hatsu.png";
import chun from "../../assets/chun.png";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";

const BaseWrapper = styled.div`
  @media (max-width: ${cssValues.limits.mobileLimit}) {
    padding-left: 1rem;
  }
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

const Section = styled.div``;

const AddUser = styled.div`
  color: #000096;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
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

  function GridListCompound() {
    const theme = useTheme();
    const matches = useMediaQuery(
      theme.breakpoints.up(cssValues.limits.mobileLimit.slice(0, -2))
    );

    return (
      <GridList className={classes.gridList} cols={matches ? "2.5" : "1"}>
        {contestants &&
          contestants.map((contestant, index) => {
            return (
              <GridListTile className={classes.gridListTile}>
                <RankingBox
                  rank={index + 1}
                  score={contestant.score}
                  player={contestant.name}
                />
              </GridListTile>
            );
          })}
      </GridList>
    );
  }

  return (
    <BaseWrapper>
      <Spacing32 />
      <Section>
        <Header>
          <HeaderIcon src={hatsu} alt="" />
          <TitleLargeReg>參賽者</TitleLargeReg>
          <AddUser
            onClick={() => {
              history.push("/create-user");
            }}
          >
            + 增加玩家
          </AddUser>
        </Header>

        <GridListCompound />
      </Section>
      <Spacing96 />
      <Header>
        <HeaderIcon src={chun} alt="" />
        <TitleLargeReg>最近賽事</TitleLargeReg>
      </Header>
    </BaseWrapper>
  );
};

export default Dashboard;
