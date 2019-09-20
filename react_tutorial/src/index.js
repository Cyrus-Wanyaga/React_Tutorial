import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header homeLink="Home" />
        <Home name={"Max"} initialAge={27} />
        <p>This is a paragraph</p>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("root"));
