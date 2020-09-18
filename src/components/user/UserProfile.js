import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    const imgStyle = {
      borderRadius: "50% !important",
      padding: "20px",
    };
    const { photoURL, displayName, email, lastLoginAt } = this.props;
    // console.log(this.props.user.lastLoginAt);
    //let lastLoginUser = new Date(lastLoginAt * 1000).toUTCString();
    return (
      <>
        <img
          src={photoURL}
          height="100px"
          alt={displayName}
          className="img img-responsive diary-user-img"
          style={imgStyle}
        />
        <h4>{displayName}</h4>
        <h5>{email}</h5>
        {/* <h5>{lastLoginUser}</h5> */}
      </>
    );
  }
}
