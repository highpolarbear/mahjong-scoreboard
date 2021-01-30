import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import cssValues from "../../utils/cssValues.json";
import { TitleLargeReg, Link } from "../../components/text/text";
import RankingBox from "../../components/rankingbox/rankingbox";
import hatsu from "../../assets/hatsu.png";
import chun from "../../assets/chun.png";
import { Spacing32, Spacing96 } from "../../components/spacing/spacing";

const BaseWrapper = styled.div`
  @media (max-width: ${cssValues.limits.mobileLimit}) {
    padding: 0 1rem 5rem 1rem;
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
    border-radius: 2rem;
    border: 0.1px solid #eeeeee;
  }
`;

const EmptyWarningText = styled.div`
  margin: 5rem auto;
  text-align: center;
  font-family: zh-light;
  font-size: 2rem;
  color: ${cssValues.colours.darkGray};
`;

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: "20rem",
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
  table: {
    minWidth: 650,
  },
  tableHeader: {
    fontFamily: "zh-Bold",
  },
}));

const Dashboard = (props) => {
  const [contestants, setContestants] = useState([]);
  const [contests, setContests] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  // Get all contestants from db
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

      setContestants(response);
    }
    getContestants();
  }, []);

  // Get all previous contests from db
  useEffect(() => {
    async function getContests() {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/get-all-match",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // Sort entries by chronological order
          return data.sort(function (a, b) {
            return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
          });
        });
      setContests(response);
    }
    getContests();
  }, []);

  const Players = () => {
    const theme = useTheme();
    const matches = useMediaQuery(
      theme.breakpoints.up(cssValues.limits.mobileLimit.slice(0, -2))
    );
    return (
      <div>
        {contestants.length === 0 ? (
          <EmptyWarningText>好似未有人喎</EmptyWarningText>
        ) : (
          <GridList className={classes.gridList} cols={matches ? 2.5 : 1.3}>
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
  };

  const Contests = () => {
    return (
      <div>
        {contests.length === 0 ? (
          <EmptyWarningText>仲未有比賽喎</EmptyWarningText>
        ) : (
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader} align="center">
                    時間
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    贏家
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    輸家
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    自摸/出銃
                  </TableCell>
                  <TableCell className={classes.tableHeader} align="center">
                    番數（每位輸家）
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contests.map((contest) => {
                  const date = new Date(contest.date);
                  return (
                    <TableRow key={contest._id}>
                      <TableCell align="center">
                        {date.getUTCDate()}
                        {"/"}
                        {date.getUTCMonth() + 1}
                        {"/"}
                        {date.getUTCFullYear()}{" "}
                        {("0" + date.getUTCHours()).slice(-2)}
                        {":"}
                        {("0" + date.getUTCMinutes()).slice(-2)}
                      </TableCell>
                      <TableCell align="center">
                        {contest.players.winner.name}
                      </TableCell>
                      <TableCell align="center">
                        {contest.players.loser.map((user) => {
                          return user.name + " ";
                        })}
                      </TableCell>
                      <TableCell align="center">
                        {contest.isSelfDraw ? "自摸" : "出銃"}
                      </TableCell>
                      <TableCell align="center">{contest.score}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  };

  return (
    <BaseWrapper>
      <Spacing32 />
      <Section>
        <Header>
          <HeaderTitle>
            <HeaderIcon src={hatsu} alt="" />
            <TitleLargeReg>排行榜</TitleLargeReg>
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
              history.push("/create-match");
            }}
          >
            + 記錄賽果
          </Link>
        </Header>
        <Contests />
      </Section>
    </BaseWrapper>
  );
};

export default Dashboard;
