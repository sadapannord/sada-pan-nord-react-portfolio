import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PortfolioContainer from "./components/PortfolioContainer";

import "./App.css";
import "materialize-css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div className="myContainer">
      <PortfolioContainer />
    </div>
  );
};

export default App;
