import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
    setTimeout(
      () =>
        this.setState({
          status: 1
        }),
      3000
    );
  }
  onMakeYounger() {
    this.setState({ age: this.state.age - 3 });
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }
  render() {
    const props = this.props;
    let text = "Something";
    return (
      <div>
        <p>In a new Component!</p>
        <p>
          Your name is {props.name}, your age is {this.state.age}
        </p>
        <p>Status: {this.state.status}</p>
        <hr></hr>
        <button
          onClick={this.onMakeOlder.bind(this)}
          className="btn btn-primary btn-sm"
        >
          Make me older!
        </button>
        <hr></hr>
        <button
          onClick={this.onMakeYounger.bind(this)}
          className="btn btn-danger btn-sm"
        >
          Make me younger!
        </button>
        <hr></hr>
        <button className="btn btn-dark btn-sm" onClick={this.props.greet}>
          Greet
        </button>
        <hr></hr>
        <input
          type="text"
          value={this.state.homeLink}
          onChange={event => this.onHandleChange(event)}
        />
        <button
          className="btn btn-dark btn-sm"
          onClick={this.onChangeLink.bind(this)}
        >
          Change Header Link
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  initialLinkName: PropTypes.string
};
