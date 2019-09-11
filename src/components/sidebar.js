import React from 'react';

function Sidebar(props) {
  return (
    <aside className="border" id="colorlib-aside">
      <div className="text-center">
        <div className="author-img" style={{backgroundImage: `url(${props.photo})`}}/>
        <h1 id="colorlib-logo">{props.name}</h1>
        <span className="position">{props.title}</span>
      </div>
      <nav id="colorlib-main-menu" className="navbar">
        <div id="navbar" className="collapse in" aria-expanded="true" style={{marginTop: "50%"}}>
          <ul>
            <li className="active"><a href="#">Introduction</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar;