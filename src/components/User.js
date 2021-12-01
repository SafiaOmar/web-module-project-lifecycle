import React, { Component } from "react";
import axios from "axios";
class User extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SafiaOmar")
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { user } = this.state;
    if (!this.state.user) return <p>Loading data ...</p>;
    return (
      <div>
        <img style={{ width: "150px" }} src={user.avatar_url} alt={user.name} />
        <h3>{user.name}</h3>
        <p>Username: {user.login}</p>
        <p>Total Repos: {user.public_repos}</p>
      </div>
    );
  }
}

export default User;