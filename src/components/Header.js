import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getUser, logout } from "../actions/userActions";
import { Link } from "react-router-dom";

class Header extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <Link className="navbar-brand" to="/">
              My Diary {new Date().getFullYear()}
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/note/create">Create Note</Link>
              </li>
              {this.props.user === null ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li>
                  <Link to="/logout" onClick={() => this.props.logout()}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { getUser, logout })(Header);
