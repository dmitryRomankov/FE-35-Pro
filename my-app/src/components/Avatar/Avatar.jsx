import React from "react";
import "./avatar.css";

const ProfileAvatar = ({ src }) => (
  <img src={src} alt="Profile avatar" className="avatar" />
);

export class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ProfileAvatar src={this.props.src} />;
  }
}
