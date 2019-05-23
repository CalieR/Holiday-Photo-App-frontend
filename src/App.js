
import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import UserPage from "./components/UserPage";
import api from "./util/api";

class App extends Component {
  state = {
    logged_in: false,
    username: "",
    password: ""
  };

  // if you refresh the page, a logged in user can still have their stuff displayed
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        this.setState({ logged_in: true, username: user.username });
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      console.log(data);
      if (data.error) {
        alert("You have entered the wrong username or password.  Please check your details and try again");
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({ logged_in: true, username: data.username });
      }
    });
  };

  onSignupClicked = e => {
    e.preventDefault();
    // user.create (fetch)
    // then api.login - duplication!
    // refactor, pass route endpoint
    api.signup(this.state.username, this.state.password).then(data => {
      console.log(data);
      if (data.error) {
        alert("There is already a user with that name.  Please select another username");
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({ logged_in: true, username: data.username });
      }
    });
  };

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.logged_in ? (
          <UserPage
            handleLogOut={this.handleLogOut}
            username={this.state.username}
          />
        ) : (
          <Landing
            logged_in={this.state.logged_in}
            onLoginClicked={this.onLoginClicked}
            onSignupClicked={this.onSignupClicked}
            handleLogOut={this.handleLogOut}
            username={this.state.username}
            handleChange={this.handleChange}
            getPosts={this.getPosts}
          />
        )}
      </div>
    );
  }
}

export default App;
