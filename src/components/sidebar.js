import React from 'react';
import "../css/style.css";
import "../css/bootstrap.min.css";

class Sidebar extends React.Component {
    render() {
        return (
            <aside class="border js-fullheight" id="sidebar">
                <div className="text-center">
                    <div className="author-img" style={{backgroundImage: `url(${this.props.photo})`}}></div>
                    <h1 id="colorlib-logo">{this.props.name}</h1>
                    <span className="position">{this.props.title}</span>
                </div>
                <nav id="colorlib-main-menu" className="navbar">
                    <div id="navbar" className="collapse in" aria-expanded="true">
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
}

export default Sidebar;