import React, { Component } from "react";

class Landing extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <>
        <h1>Welcome to Holiday Photo App!</h1>
        {this.props.logged_in ? (
          <>
            <p>You are logged in as {this.props.username}</p>
            <button onClick={this.props.handleLogOut}>Log out</button>
          </>
        ) : (
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                onChange={this.props.handleChange}
                id="username"
                type="text"
                name="username"
              />
              <label htmlFor="password">Password:</label>
              <input
                onChange={this.props.handleChange}
                id="password"
                type="text"
                name="password"
              />
              <button onClick={this.props.onLoginClicked}>Log in</button>
            </div>
          </form>
        )}
      </>
    );
  }
}

export default Landing;
