import React, { Component } from "react";
import { FaRegFrown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class NoteEmpty extends Component {
  render() {
    return (
      <div className="container diary-empty-container">
        <div className="row">
          <div className="col-md-10">
            <FaRegFrown className="diary-font-icon" />
            <h3>you don't have any notes yet</h3>
            <button className="btn btn-primary diary-link">
              <Link to="/note/create">Insert New Note</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
