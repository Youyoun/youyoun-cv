import React from 'react';

import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Project from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";

import photo from './linkedin.jpeg'

function App() {
    return (
        <div id="colorlib-page">
            <Sidebar
                photo={photo}
                name="Younes Belkouchi"
                title="Machine Learning and Software Engineer"/>
            <div id="colorlib-main">
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
