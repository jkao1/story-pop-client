import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { RoutingApp } from "./modules";
import { AppContainer } from "react-hot-loader";
import injectTapEventPlugin from "react-tap-event-plugin";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const API_URL = "http://localhost:3000"

// for onClick events with MUI/React
try {
  injectTapEventPlugin();
} catch (err) {
  /* hot reloading, no issue  */
}

import { VERSION } from "./versionInfo";

console.log("appVersion ->", VERSION);

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: `${API_URL}/graphql` }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AppContainer>
    <ApolloProvider client={apolloClient}>
      <RoutingApp />
    </ApolloProvider>
  </AppContainer>,
  document.getElementById("app"),
);
