import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";

const Routes = () => {
  return (
    <Router>
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
