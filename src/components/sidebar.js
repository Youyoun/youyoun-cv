import React, {useState} from 'react';

import Button from "react-bootstrap/Button";
import "./sidebar.css"

const scrollTo = ele => {
    ele.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};

function NavButton(props) {
    // Need to fix the problem of using li and button, feel not reactjsy
    return (
        <li className={`sidebar-menu-button ${props.selectedSection === props.section ? "active" : ""}`}>
            <button className={"linkButton"} onClick={() => props.onClick()}>
                {props.section}
            </button>
        </li>
    )
}

function Sidebar(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`} id="sidebar">
            <Button variant="outline-primary" onClick={() => setIsOpen(!isOpen)}
                    className={`glyphicon glyphicon-align-justify ${isOpen ? "active" : ""}`}/>
            <img className="round-img" src={props.photo} alt={""}/>
            <h1 id="sidebar-name">{props.name}</h1>
            <span className="sidebar-job position">{props.title}</span>
            <nav id="sidebar-menu" className="navbar">
                <ul>
                    {props.sections.map(
                        (element, index) => <NavButton onClick={() => scrollTo(element.ref.current)} key={index}
                                                       section={element.section}
                                                       selectedSection={props.visibleSection}/>
                    )}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;
