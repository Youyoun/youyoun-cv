import React from 'react';

import "./App.css"

import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

import photo from './linkedin.jpeg'

function App() {
  return (
    <div>
      <Sidebar
        photo={photo}
        name="Younes Belkouchi"
        title="Machine Learning and Software Engineer"/>
      <div id="app">
        <Introduction/>
        <div className="pad-sides">
          <About/>
          <Experience/>
          <Education/>
          {/*<Skills/>*/}
          {/*<Contact/>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
