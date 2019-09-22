import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = { homeLink: "Home", homeMounted: true };
  }
  onGreet() {
    alert("Hello");
  }
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }
  render() {
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = (
        <Home
          name={"Max"}
          initialAge={27}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    return (
      <div className="container">
        <Header homeLink={this.state.homeLink} />
        <div className="row">{homeCmp}</div>
        <div className="row">
          <button
            className="btn btn-dark btn-sm"
            onClick={this.onChangeHomeMounted.bind(this)}
          >
            (Un)Mount Home Component
          </button>
        </div>
        <p>This is a paragraph</p>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("root"));
