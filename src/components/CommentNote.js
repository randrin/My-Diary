import React, { Component } from "react";
import { connect } from "react-redux";

class CommentNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { comment } = this.state;
    const isEnabled = comment.length > 0;
    return (
      <div className="mt-5">
        <form>
          <div className="form-group">
            <textarea
              rows="10"
              className="form-control no-border"
              placeholder="Insert the Comment"
              name="comment"
              value={comment}
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

function mapStateToProps(state, ownProp) {
  return {
    user: state.user.id,
  };
}

export default connect(mapStateToProps)(CommentNote);
