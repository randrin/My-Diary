import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../styles/diary.scss";
import _ from "lodash";
import { connect } from "react-redux";
import { getNotes, deleteNote } from "../actions/notesAction";
import { getUser } from "../actions/userActions";
import NoteCard from "./notes/NoteCard";
import { toast } from "react-toastify";
import UserProfile from "./user/UserProfile";
import NoteEmpty from "./notes/NoteEmpty";
toast.configure();

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderNotes = this.renderNotes.bind(this);
  }

  // Life Cycle
  componentDidMount() {
    //   this.props.getNotes();
    //   this.props.getUser();

    // Alert Welcome User
    if (this.props.user.displayName) {
      toast.info(`Welcome ${this.props.user.displayName} to your Diary.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  // Render notes
  renderNotes() {
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

  render() {
    const { photoURL, displayName, email, lastLoginAt } = this.props.user;
    const { notes } = this.props;
    console.log(notes.length);

    return (
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-2">
            <UserProfile
              photoURL={photoURL}
              displayName={displayName}
              email={email}
              lastLoginAt={lastLoginAt}
            />
          </div>
          <div className="col-md-10">
            <h2 className="text-danger font-weight-bold">
              Welcome to your Diary
            </h2>
            {notes.length > 0 ? this.renderNotes() : <NoteEmpty />}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user,
  };
}

export default connect(mapStateToProps, {
  getNotes,
  deleteNote,
  getUser,
})(App);
