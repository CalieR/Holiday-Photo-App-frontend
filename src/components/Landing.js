import React, { Component } from "react";
import { Grid, Container, Header, Form, Button, Icon } from "semantic-ui-react";

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
        <Grid centered>
          <Form className="login-signup">
            <Form.Field>
              <input
                onChange={this.props.handleChange}
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                onChange={this.props.handleChange}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Field>

            <Button color="teal" onClick={this.props.onLoginClicked}>
              Log In
            </Button>
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
          <Form className="login-signup">
            <Form.Field>
              <h3>Choose a username and password</h3>
             

              <input
                onChange={this.props.handleChange}
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                onChange={this.props.handleChange}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Field>
            <Button color="teal" onClick={this.props.onSignupClicked}>
              Sign Up
            </Button>
          </Form>
        </Grid>
      );
    }
  };

  render() {
    return (
      <Container className="welcome">
        <Icon name="share square outline" size="huge" />
        <Header className="welcome-header" size="huge">
          Welcome to Picshare
        </Header>
        <div className="welcome-buttons">
          <Button color="teal" onClick={this.viewLogin}>
            Log in
          </Button>
          <Button color="teal" onClick={this.viewSignup}>
            Sign up
          </Button>
        </div>
        {this.renderSignUp()}
        {this.renderLogin()}
      </Container>
    );
  }
}

export default Landing;
