import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NoteDetails extends Component {
  render() {
    const { note } = this.props;
    return (
      <div className="container">
        <div className="row">
          <Link to="/">Back To Home</Link>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h1 className="text-danger">{note.title}</h1>
            <div className="diary-noteDetails-body">{note.body}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id],
    user: state.user.uid,
  };
}

export default connect(mapStateToProps)(NoteDetails);
