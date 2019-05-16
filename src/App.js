import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import api from "./util/api";

class App extends Component {
  state = {
    logged_in: false,
    username: "",
    password: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        this.setState({ logged_in: true, username: user.username });
      });
    }
  }

  // getPosts = () => {
  //   const token = localStorage.getItem("token");
  //   api
  //     .getPosts(token)
  //     .then(posts =>
  //       this.setState({ posts }, () => console.log(this.state.posts))
  //     );
  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      // if data has data.error, then to not proceed
      // if (data.error === undefined)
      localStorage.setItem("token", data.jwt);
      this.setState({ logged_in: true, username: data.username });
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
        <Landing
          logged_in={this.state.logged_in}
          onLoginClicked={this.onLoginClicked}
          handleLogOut={this.handleLogOut}
          username={this.state.username}
          handleChange={this.handleChange}
          getPosts={this.getPosts}
        />
      </div>
    );
  }
}
export default App;
