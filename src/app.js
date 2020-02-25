import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";

import SearchParams from "./SearchParams";
import store from "./store";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
