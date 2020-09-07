import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNotes } from "../actions/notesAction";
import { getUser } from "../actions/userActions";

class Loading extends Component {
  componentWillMount() {
    const { userLoading, notesLoading } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }
    if (notesLoading === undefined) {
      this.props.getNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    // Check if user is authentificated and retrieve the notes
    if (nextProps.userLoading === -1 && nextProps.user !== null) {
      this.props.getNotes();
    }
  }
  render() {
    const { userLoading, notesLoading, user, children } = this.props;
    if ((!userLoading && !notesLoading) || user !== null) {
      return <div>{children}</div>;
    } else {
      return (
        <div className="text-center">
          <h2>Loading ...</h2>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    notesLoading: state.loading.notes,
  };
}

export default withRouter(
  connect(mapStateToProps, { getNotes, getUser })(Loading)
);
