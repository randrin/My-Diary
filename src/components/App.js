import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../styles/diary.scss";
import _ from "lodash";
import { connect } from "react-redux";
import { getNotes, saveNote, deleteNote } from "../actions/notesAction";
import { getUser } from "../actions/userActions";
import NoteCard from "./notes/NoteCard";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    const note = {
      title: title,
      body: body,
      uid: this.props.user.uid,
    };
    this.props.saveNote(note);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      title: "",
      body: "",
    });
  }

  // Life Cycle
  // componentDidMount() {
  //   this.props.getNotes();
  //   this.props.getUser();
  // }

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
              <button className="btn btn-info">
                <Link to={`/${key}/edit`}>Update</Link>
              </button>
            </NoteCard>
          )}
        </>
      );
    });
  }

  render() {
    const imgStyle = {
      borderRadius: "50% !important",
      padding: "20px",
    };
    const { title, body } = this.state;
    const isEnabled = title.length > 0 && body.length > 0;
    return (
      <>
        <div className="container my-5">
          <div className="row text-center">
            <div className="col-md-2">
              <img
                src={this.props.user.photoURL}
                height="100px"
                alt={this.props.user.displayName}
                className="img img-responsive diary-user-img"
                style={imgStyle}
              />
              <h4>{this.props.user.displayName}</h4>
              <h5>{this.props.user.email}</h5>
            </div>
            <div className="col-md-10">
              <h2 className="text-danger font-weight-bold">My Diary</h2>
              {this.renderNotes()}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control no-border"
                    placeholder="Insert the Title"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="10"
                    className="form-control no-border"
                    placeholder="Insert the Body"
                    name="body"
                    value={body}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    disabled={!isEnabled}
                    className="btn btn-primary float-left"
                  >
                    Save Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
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
  saveNote,
  deleteNote,
  getUser,
})(App);
