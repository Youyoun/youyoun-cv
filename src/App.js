import React, {useState, useRef, useEffect, useMemo} from 'react';

import "./App.css"

import Sidebar from "./components/Sidebar/sidebar";
import Introduction from "./components/Introduction/introduction";
import About from "./components/About/about";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";

import photo from './assets/linkedin.jpeg'

function getDimensions(ele) {
    const {height} = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
    };
}

function App() {
    const introductionRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);

    const sections = useMemo(() => [
        {section: "Introduction", ref: introductionRef},
        {section: "About", ref: aboutRef},
        {section: "Experience", ref: experienceRef},
        {section: "Education", ref: educationRef},
        {section: "Skills", ref: skillsRef},
    ], []);

    const [visibleSection, setVisibleSection] = useState(sections[0].section);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let selected = sections.find(({_, ref}) => {
                const ele = ref.current;
                if (ele) {
                    const {offsetBottom, offsetTop} = getDimensions(ele);
                    return scrollPosition >= (offsetTop > 0 ? offsetTop - 300 : offsetTop) && scrollPosition < offsetBottom - 300
                }
                return false;
            })
            if (selected.section !== visibleSection) {
                setVisibleSection(selected.section);
            } else if (!selected.section && visibleSection) {
                setVisibleSection(null);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection, sections]);
    return (
        <div>
            <Sidebar sections={sections}
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
                </div>
            </div>
        </div>
    );
}

export default App;
