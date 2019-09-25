import React, {useState, useRef, useEffect} from 'react';

import "./App.css"

import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

import photo from './linkedin.jpeg'

function getDimensions(ele) {
  const {height} = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

function scrollTo(ele) {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState(null);

  const introductionRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  // const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    "Introduction": introductionRef,
    "About": aboutRef,
    "Experience": experienceRef,
    "Education": educationRef,
    "Skills": skillsRef,
    "Contact": contactRef,
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      let selected;
      for (var section in sections) {
        const ele = sections[section].current;
        if (ele) {
          const {offsetBottom, offsetTop} = getDimensions(ele);
          if (scrollPosition >= (offsetTop > 0 ? offsetTop - 300 : offsetTop) && scrollPosition < offsetBottom - 300) {
            selected = section;
            break
          }
        }
      }
      if (selected !== visibleSection) {
        setVisibleSection(selected);
      } else if (!selected && visibleSection) {
        setVisibleSection(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection, sections]);
  return (
    <div>
      <Sidebar
        sections={sections}
        photo={photo}
        name="Younes Belkouchi"
        title="Machine Learning and Software Engineer"
        visibleSection={visibleSection}/>
      <div id="app">
        <div ref={introductionRef}>
          <Introduction/>
        </div>
        <div className="pad-sides">
          <div ref={aboutRef}>
            <About/>
          </div>
          <div ref={experienceRef}>
            <Experience/>
          </div>
          <div ref={educationRef}>
            <Education/>
          </div>
          <div ref={skillsRef}>
            <Skills/>
          </div>
          <div ref={contactRef}>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
