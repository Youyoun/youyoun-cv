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
          className={this.props.selectedSection === this.props.section ? "active" : ""}>
        <button className={"linkButton"} onClick={() => this.props.onClick()}>
          {this.props.section}
        </button>
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
            <NavButton onClick={() => scrollTo(this.props.refs[0].ref.current)} selectedSection={this.props.visibleSection} section={"Introduction"}/>
            <NavButton onClick={() => scrollTo(this.props.refs[1].ref.current)} selectedSection={this.props.visibleSection} section={"About"}/>
            <NavButton onClick={() => scrollTo(this.props.refs[2].ref.current)} selectedSection={this.props.visibleSection} section={"Experience"}/>
            <NavButton onClick={() => scrollTo(this.props.refs[3].ref.current)} selectedSection={this.props.visibleSection} section={"Education"}/>
            {/*<NavButton active={this.props.visibleSection === "Project"} section={"Project"}/>*/}
            <NavButton onClick={() => scrollTo(this.props.refs[4].ref.current)} selectedSection={this.props.visibleSection} section={"Skills"}/>
            <NavButton onClick={() => scrollTo(this.props.refs[5].ref.current)} selectedSection={this.props.visibleSection} section={"Contact"}/>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar;