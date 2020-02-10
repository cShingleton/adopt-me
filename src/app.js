import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Helmi", animal: "Dog", breed: "Poodle" }),
    React.createElement(Pet, { name: "Elvis", animal: "Dog", breed: "Poodle" }),
    React.createElement(Pet, { name: "Clem", animal: "Bird", breed: "Canary" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
