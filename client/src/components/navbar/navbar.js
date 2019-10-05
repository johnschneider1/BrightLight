import React, { Component } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Menu, Icon, Input, Header } from "semantic-ui-react";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

export default class TradeNav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color="yellow">
        <Icon name="lightbulb" color="yellow" size="huge" />
        <Menu.Item
          name="home"
          as={Nav}
          to={"/landing"}
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <div>
          <Header as="h2" textAlign="center" color="yellow">
            QuietLight
          </Header>
        </div>

        <Menu.Menu position="right">
          {/* <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item> */}
          <Menu.Item
            name="Story"
            as={Nav}
            to={"/scrolltext"}
            active={activeItem === "Story"}
            onClick={this.handleItemClick}
          >
            Story
          </Menu.Item>
          <Menu.Item
            name="logout"
            as={Nav}
            to={"/goodbye"}
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
