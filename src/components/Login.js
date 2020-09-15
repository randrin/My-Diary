import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, twitterLogin } from "../actions/userActions";

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
              Login with Google
            </button>
            <button
              className="btn btn-info col-sm-6"
              onClick={this.props.twitterLogin}
            >
              Login with Twitter
            </button>
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

export default connect(mapStateToProps, { googleLogin, twitterLogin })(Login);
