import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveNote } from "../../actions/notesAction";
import UserProfile from "../user/UserProfile";
import { toast } from "react-toastify";
toast.configure();

class NoteCreate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      lastLoginUser: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // Alert Create Note
    toast.success(`Note created succefully.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.resetForm();
    this.props.history.push("/");
  }

  resetForm() {
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const { title, body } = this.state;
    const { photoURL, displayName, email, lastLoginAt } = this.props.user;

    const isEnabled = title.length > 0 && body.length > 0;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2">
            <UserProfile
              photoURL={photoURL}
              displayName={displayName}
              email={email}
              lastLoginAt={lastLoginAt}
            />
          </div>
          <div className="col-md-10">
            <h2 className="text-danger font-weight-bold">Create New Note</h2>

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
                <Link to={`/`} className="btn btn-danger">
                  Cancel
                </Link>
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
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { saveNote })(NoteCreate);
