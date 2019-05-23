import React, { Component } from "react";
import { Grid, Container, Form, Button } from "semantic-ui-react";

class Landing extends Component {
  state = {
    choice: ""
  };

  viewLogin = () => {
    this.setState({ choice: "login" });
  };

  renderLogin = () => {
    if (this.state.choice === "login") {
      return (
        <Grid centered >
        <Form>
          <Form.Field>
            <label>Login Form:</label>

            <label htmlFor="username">Username:</label>
            <input
              onChange={this.props.handleChange}
              id="username"
              type="text"
              name="username"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password:</label>
            <input
              onChange={this.props.handleChange}
              id="password"
              type="text"
              name="password"
            />
          </Form.Field>

          <Button onClick={this.props.onLoginClicked}>Submit</Button>
        </Form>
        </Grid>
      );
    }
  };

  viewSignup = () => {
    this.setState({ choice: "signup" });
  };

  renderSignUp = () => {
    if (this.state.choice === "signup") {
      return (
        <Grid centered>
        <Form>
          <Form.Field>
            <label>Signup Form:</label>
            <p>Choose a username (must be unique) and password</p>

            <label htmlFor="username">Username:</label>
            <input
              onChange={this.props.handleChange}
              id="username"
              type="text"
              name="username"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password:</label>
            <input
              onChange={this.props.handleChange}
              id="password"
              type="text"
              name="password"
            />
          </Form.Field>
          <Button onClick={this.props.onSignupClicked}>Submit</Button>
        </Form>
        </Grid>
      );
    }
  };

  render() {
    return (
      <Container>
        <h1>Welcome to Picshare</h1>
        <h3>Please log in or sign up</h3>
        <Button onClick={this.viewLogin}>Log in</Button>
        <Button onClick={this.viewSignup}>Sign up</Button>

        {this.renderSignUp()}
        {this.renderLogin()}
      </Container>
    );
  }
}

export default Landing;
