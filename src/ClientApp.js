import React from "react";
import { hydrate } from "react-dom";
import App from "./app";

// any other browser-only things

hydrate(<App />, document.getElementById("root"));
