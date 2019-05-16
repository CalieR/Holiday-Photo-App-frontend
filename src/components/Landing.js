import React, { Component } from "react";

class Landing extends Component {
  state = {
    clicked: ''
  };

  handleClick = event => {
    console.log(event.target.id)
    this.setState({
      clicked: event.target.id
    })
    // if login, render <Login />
    // if signup, render <Signup />
  }
  render() {
    return (
      <>
        <h1>Welcome to Holiday Photo App!</h1>
        <button id="login" onClick={this.handleClick}>Login</button>
        {/* <button name="signup" onClick={this.handleClick}>Sign up</button> */}
        {this.state.clicked === "login" ? (<h1>Login Form</h1>) : null}
      </>
    );
  }
}

export default Landing;
