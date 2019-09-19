import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  render() {
    const props = this.props;
    let text = "Something";
    return (
      <div>
        <p>In a new Component!</p>
        <p>{text} </p>
        <p>
          Your name is {props.user.name}, your age is {props.user.age}
        </p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {props.user.hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </div>
        <hr></hr>
        {props.children}
      </div>
    );
  }
}
