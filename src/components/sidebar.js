import React from 'react';

import Button from "react-bootstrap/Button";
import "./sidebar.css"

class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  toggleActive() {
    this.setState({active: true})
  }

  render() {
    return (
      <li onClick={() => this.toggleActive()} className={this.state.active ? "active" : ""}>
        <a href="#">
          {this.props.section}
        </a>
      </li>
    )
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClick() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <aside className={`sidebar ${this.state.open ? "open" : ""}`} id="sidebar">
        <Button variant="outline-primary" onClick={() => this.handleClick()}
                className={`glyphicon glyphicon-align-justify ${this.state.open ? "active" : ""}`}/>
        <img className="round-img" src={this.props.photo}/>
        <h1 id="sidebar-name">{this.props.name}</h1>
        <span className="sidebar-job position">{this.props.title}</span>
        <nav id="sidebar-menu" className="navbar">
          <ul>
            <NavButton section={"Introduction"}/>
            <NavButton section={"About"}/>
            <NavButton section={"Experience"}/>
            <NavButton section={"Education"}/>
            <NavButton section={"Project"}/>
            <NavButton section={"Skills"}/>
            <NavButton section={"Contact"}/>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar;