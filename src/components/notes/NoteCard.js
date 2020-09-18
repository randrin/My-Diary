import React, { PureComponent } from "react";

export default class NoteCard extends PureComponent {
  render() {
    return (
      <div className="jumbotron">
        <div>{this.props.children}</div>
      </div>
    );
  }
}
