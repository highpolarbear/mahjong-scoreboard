import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";

const history = createBrowserHistory();
wrapHistory(history);

const Routes = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/create-user" exact component={Home} />
        <Route path="/create-match" exact component={Home} />
        <Route path="/view-match" exact component={Home} />
        <Route component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
