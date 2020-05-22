import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./environment";

const RootQuery = graphql`
  query srcQuery {
    ...App_count
  }
`;

ReactDOM.render(
  <QueryRenderer
    environment={environment}
    query={RootQuery}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        console.log(props);
        return <App />;
      }
      return <div>Loading</div>;
    }}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
