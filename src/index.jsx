import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.css";
import AppRoutes from "./Routes";

const ROOT = ReactDOM.createRoot(document.getElementById("root"));

const CLIENT = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_GRAPHQL_API,
});

ROOT.render(
  <ApolloProvider client={CLIENT}>
    <AppRoutes />
  </ApolloProvider>
);
