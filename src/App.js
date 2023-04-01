import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PortfolioContainer from "./components/PortfolioContainer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import gitHub from "./assets/gitHub-mark.png";
import "./App.css";
import "materialize-css";

// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import NavTabs from "./components/NavTabs";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import AppRouter from "./AppRouter";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div class="myContainer">
      <PortfolioContainer />
    </div>
  );
};

export default App;
