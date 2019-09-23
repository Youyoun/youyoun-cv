import React from 'react';

import Button from "react-bootstrap/Button";
import "./sidebar.css"

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {
    return (
      <li onFocus={() => this.setState({active: true})} onBlur={() => this.setState({active: false})}
          className={this.props.active ? "active" : ""}>
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
            <NavButton active={this.props.visibleSection === "Introduction"} section={"Introduction"}/>
            <NavButton active={this.props.visibleSection === "About"} section={"About"}/>
            <NavButton active={this.props.visibleSection === "Experience"} section={"Experience"}/>
            <NavButton active={this.props.visibleSection === "Education"} section={"Education"}/>
            {/*<NavButton active={this.props.visibleSection === "Project"} section={"Project"}/>*/}
            <NavButton active={this.props.visibleSection === "Skills"} section={"Skills"}/>
            <NavButton active={this.props.visibleSection === "Contact"} section={"Contact"}/>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar;