import React, { Component } from "react";
import { Segment, Menu, Button, Icon } from "semantic-ui-react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <Segment secondary className="nav-header">
        <Menu>
          <Menu.Item>
          <Icon name="share square outline" size="huge" />
            <h1>PICSHARE</h1>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <h1>Logged in as {this.props.username}</h1>
            </Menu.Item>

            <Menu.Item>
              <Button color="teal" onClick={this.props.handleLogOut}>Log out</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;
