import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Authentification extends PureComponent {
  componentDidMount() {
    const { user, userLoading } = this.props;
    if (!user && userLoading === false) {
      this.props.history.push("/login");
    }
  }
  render() {
    const { user, userLoading, children } = this.props;
    return userLoading === false && user ? <div>{children}</div> : null;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
  };
}

export default withRouter(connect(mapStateToProps)(Authentification));
