import React, { Component } from "react";
import axios from "axios";

class Follower extends Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SafiaOmar/followers")
      .then((res) =>
        this.setState({
          followers: res.data,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { followers } = this.state;
    if (followers.length === 0) return <p>Loading Followers</p>;
    return (
      <div className="followers-wrapper">
        {followers.map((follower) => (
          <div key={follower.id} className="follower-card">
            <img
              style={{ width: "80px" }}
              src={follower.avatar_url}
              className="follower-card"
            />
            <h4>{follower.login}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Follower;