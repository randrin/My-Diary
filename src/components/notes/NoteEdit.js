import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../../actions/notesAction";

class NoteEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
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
      uid: this.props.user,
    };
    this.props.editNote(this.props.match.params.id, note);
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
    const isEnabled = title.length > 0 && body.length > 0;
    return (
      <>
        <div className="container my-5">
          <div className="row text-center">
            <div className="col">
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
                    Update Note
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
    note: state.notes[ownProps.match.params.id],
    user: state.user.uid,
  };
}

export default connect(mapStateToProps, { editNote })(NoteEdit);
