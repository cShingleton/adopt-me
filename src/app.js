import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Helmi" animal="Dog" breed="Poodle" />
      <Pet name="Elvis" animal="Dog" breed="Poodle" />
      <Pet name="Clem" animal="Bird" breed="Canary" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
