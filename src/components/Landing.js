import React, { Component } from "react";

class Landing extends Component {
  state = {
    choice: "",
    username: "",
    password: ""
  };

  viewLogin = () => {
    this.setState({ choice: "login" });
  };

  renderLogin = () => {
    if (this.state.choice === "login") {
      return (
        <form>
          <label>Login Form:</label>
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
          </div>
          <button>submit</button>
        </form>
      );
    }
  };

  viewSignup = () => {
    this.setState({ choice: "signup" });
    this.renderSignUp();
  };

  renderSignUp = () => {
    if (this.state.choice === "signup") {
      return (
        <form>
          <label>Signup Form</label>
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
          </div>
          <button>submit</button>
        </form>
      );
    }
  };

  render() {
    return (
      <>
        <h1>Welcome to Holiday Photo App!</h1>
        <h3>Please log in or sign up</h3>
        <button onClick={this.viewLogin}>Log in</button>
        <button onClick={this.viewSignup}>Sign up</button>

        {this.renderSignUp()}
        {this.renderLogin()}
      </>
    );
  }
}

export default Landing;
