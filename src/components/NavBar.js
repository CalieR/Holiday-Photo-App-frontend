import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <Menu className="App-header">
        <Menu.Item>
          <h1>PICSHARE</h1>
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item>
          <h1>Logged in as {this.props.username}</h1>
        </Menu.Item>

        <Menu.Item>
          <Button onClick={this.props.handleLogOut}>Log out</Button>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
