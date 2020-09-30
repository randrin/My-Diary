import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";
import { connect } from "react-redux";
import { deleteNote } from "../../actions/notesAction";

class NotesUser extends Component {
  render() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <>
          {note.uid === this.props.user.uid && (
            <NoteCard key={key}>
              <Link to={`/${key}`}>
                <h2>{note.title}</h2>
              </Link>
              <p>{note.body}</p>
              <button
                className="btn btn-danger"
                onClick={() => this.props.deleteNote(key)}
              >
                Delete
              </button>
              <button className="btn btn-info diary-link">
                <Link to={`/${key}/edit`}>Update</Link>
              </button>
            </NoteCard>
          )}
        </>
      );
    });
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user,
  };
}

export default connect(mapStateToProps, {
  deleteNote,
})(NotesUser);