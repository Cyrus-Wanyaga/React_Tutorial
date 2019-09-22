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
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("Component will mount");
  }
  componentDidMount() {
    console.log("Component did mount!");
  }
  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update", nextProps, nextState);
    // if (nextState.status === 1) {
    //   return false;
    // }
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }
  componentWillUnmount() {
    console.log("Component will unmount");
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
