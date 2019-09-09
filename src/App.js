import React from 'react';

import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Project from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";

import logo from './logo.svg';
import photo from './linkedin.jpeg'

import './css/bootstrap.min.css';
import './css/style.css';
import './App.css';

function App() {
    return (
        <div className="App" id="colorlib-page">
            <Sidebar
                photo={photo}
                name="Younes Belkouchi"
                title="Machine Learning and Software Engineer"/>
            <div className="App-header" id="colorlib-main">
                <Introduction/>
                <About/>
                <Experience/>
                <Education/>
                <Project/>
                <Skills/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
