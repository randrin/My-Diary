import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment } from "../../actions/commentsAction";

class CommentNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentBody: "",
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
    const { commentBody } = this.state;
    const comment = {
      commentBody: commentBody,
      uid: this.props.user,
    };
    this.props.saveComment(this.props.id, comment);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      commentBody: "",
    });
  }

  render() {
    const { commentBody } = this.state;
    const isEnabled = commentBody.length > 0;
    return (
      <div className="mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
              rows="10"
              className="form-control no-border"
              placeholder="Insert the Comment"
              name="commentBody"
              value={commentBody}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              disabled={!isEnabled}
              className="btn btn-success"
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user.uid,
  };
}

export default connect(mapStateToProps, { saveComment })(CommentNote);
