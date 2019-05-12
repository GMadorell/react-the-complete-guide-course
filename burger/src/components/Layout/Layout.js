import React, { Component } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawerHandler = () => {
    this.setState(previousState => {
      showSideDrawer: !previousState.showSideDrawer;
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerTogglerClicked={this.toggleSideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
