import React, { Component } from "react";
import { connect } from "react-redux";
import { FaFacebook, FaGooglePlusG } from "react-icons/fa";
import {
  googleLogin,
  twitterLogin,
  facebookLogin,
} from "../actions/userActions";

class Login extends Component {
  componentDidMount() {
    if (this.props.user != null) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user != null) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12 jumbotron" style={{ marginTop: "-20px" }}>
            <h1>
              Login with your favourite <b>Social Network</b>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-danger col-sm-6"
              onClick={this.props.googleLogin}
            >
              <FaGooglePlusG className="diary-social-icon" />
              <span className="diary-social-text">Login with Google</span>
            </button>
            <button
              className="btn btn-primary col-sm-6"
              onClick={this.props.facebookLogin}
            >
              <FaFacebook className="diary-social-icon" />
              <span className="diary-social-text">Login with Facebook</span>
            </button>
            {/* <button
              className="btn btn-info col-sm-4"
              onClick={this.props.twitterLogin}
            >
              Login with Twitter
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {
  googleLogin,
  twitterLogin,
  facebookLogin,
})(Login);
