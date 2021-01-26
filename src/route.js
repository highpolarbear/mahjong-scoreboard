import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import styled from "styled-components";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import CreateUser from "./pages/createUser/createUser";
import Test from "./pages/test/test";

const history = createBrowserHistory();
wrapHistory(history);

const StyledWrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const Routes = () => {
  return (
    <Router history={history}>
      <Header />
      <StyledWrapper>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/create-user" exact component={CreateUser} />
          <Route path="/create-match" exact component={Home} />
          <Route path="/view-match" exact component={Home} />
          <Route path="/test" exact component={Test} />
          <Route component={Dashboard} />
        </Switch>
      </StyledWrapper>
    </Router>
  );
};

export default Routes;
