import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    let user = {
      name: "Anna",
      hobbies: ["Sports", "Music", "Skating"]
    };
    return (
      <div className="container">
        <Header />
        <Home name={"Max"} age={27} user={user} />
        <p>This is a paragraph</p>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("root"));
