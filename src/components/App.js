import React, { PureComponent } from "react";
import "../styles/diary.scss";
import { database } from "../firebase";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
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
    };
    database.push(note);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      title: "",
      body: "",
    });
  }

  verifiedRequiedField() {
    const { title, body } = this.state;
    if (title && body) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { title, body } = this.state;
    const isEnabled = title.length > 0 && body.length > 0;
    return (
      <>
        <div className="container my-5">
          <div className="row text-center">
            <div className="col">
              <h2 className="text-danger font-weight-bold">My Diary</h2>
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

export default App;
