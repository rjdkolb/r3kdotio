import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class Tabs extends React.Component {

  constructor() {
    super();
    this.comments = ["XXX", "YYY"];
    this.comm = "XXXXXXXxx";
  }
  handleClick() {
    this.comments.push("adsssss");

    this.comments.forEach(comment => {
      console.info(comment);
    });

  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          click {this.comm}
        </button>
        {this.renderRow()}
      </div>
    );
  }
  renderRow(){
    return (this.comments.forEach(comment =>
          <label>xxx </label>
        ));
  }
}

export default Tabs;
