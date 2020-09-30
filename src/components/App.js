import React, { PureComponent } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { getNotes } from "../actions/notesAction";
import { getUser } from "../actions/userActions";
import { toast } from "react-toastify";
import UserProfile from "./user/UserProfile";
import NoteEmpty from "./notes/NoteEmpty";
import NotesUser from "./notes/NotesUser";
toast.configure();

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
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

  render() {
    const { photoURL, displayName, email, lastLoginAt } = this.props.user;
    let notesArray = _.filter(
      this.props.notes,
      (note) => note.uid === this.props.user.uid
    );
    const notesUser = Object.values(notesArray);

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
            {notesUser.length > 0 ? <NotesUser /> : <NoteEmpty />}
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
  getUser,
})(App);
