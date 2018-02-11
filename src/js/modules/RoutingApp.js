import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import appHistory from "tools/appHistory";
import ConnectedRouter from "react-router-redux/ConnectedRouter";
import store from "../store";

import { PageLayout, MainApp, Collection, StoryCover, Story } from "./core/components";

class RoutingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
          <PageLayout>
            <Switch>
              <Route exact path="/" component={MainApp} />
              <Route exact path="/collection" component={Collection} />
              <Route exact path="/stories/:story_id" component={StoryCover} />
              <Route exact path="/stories/:story_id/pages" component={Story} />
            </Switch>
          </PageLayout>
        </ConnectedRouter>
      </Provider>
    );
  }
};

export default RoutingApp;
