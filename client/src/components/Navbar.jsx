import React, { Component } from "react";
import {
  Navbar,
  NavItem,
  Button,
  SideNav,
  SideNavItem
} from "react-materialize";
import AddLoc from "./AddLocation";

class Nav extends Component {
  handlePass = (name, val) => {
    console.log(this.props);
    console.log(name, val, [name]);
    this.props.onChange(name, val);
  };
  render() {
    return (
      <div className="row" id="nav">
        <Navbar className="nav">
          <span id="whitney">Whitney</span>
          <SideNav
            id="addNew"
            trigger={<Button id="side">Add Location</Button>}
            options={("left", { closeOnClick: true })}
          >
            <header id="slogan">
              Help us Help you.
              <span>
                <p id="smtext">
                  You can add new locations and make comments to tell others
                  when to find Accessible places
                </p>
              </span>
            </header>
            <AddLoc onChange={this.handlePass} {...this.props} />
          </SideNav>
        </Navbar>
      </div>
    );
  }
}
export default Nav;
