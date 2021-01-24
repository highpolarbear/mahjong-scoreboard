import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          component={() => {
            return <div>123</div>;
          }}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
