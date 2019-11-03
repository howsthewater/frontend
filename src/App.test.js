import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { render } from "@testing-library/react";
// import "@testing-library/react/cleanup-after-each";
// import "@testing-library/jest-dom/extend-expect";

describe("<App/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
