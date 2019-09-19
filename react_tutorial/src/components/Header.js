import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
