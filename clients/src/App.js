import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <div className="count-wrapper">{props.count}</div>
      </header>
    </div>
  );
}

export default createFragmentContainer(App, {
  count: graphql`
    fragment App_count on RootQueryType {
      count
    }
  `,
});
