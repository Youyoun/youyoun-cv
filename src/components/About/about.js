import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import IcoMoon from "react-icomoon";

import "./about.css"
import SectionHeader from "../SectionHeader/sectionHeader";

function AboutDescription() {
    return (
        <Row>
            <SectionHeader title={"About Me"} subTitle={"Introduction"}/>
            <p>
                I graduated from Ecole Centrale Paris, a leading french engineering school.
                I have always been passionate about IT. I am currently taking a huge interest in everything
                that is related to machine learning or deep learning, and especially their application to the
                medical field. I am currently doing a PhD on deep learning methods applied to medical imaging.<br/>

                Beside my adoration for technology, I also enjoy playing video games and indoor climbing.
            </p>
        </Row>
    )
}

function AboutExpertise() {
    return (
        <Row>
            <SectionHeader title={""} subTitle={"Domains of interest"}/>
            <Row>
                <Pannel colorId={5} title="Machine Learning" icon="database">
                    <p>
                        I have worked on personal and professional projects that use machine learning and/or deep
                        learning
                        to answer some real world problems<br/>
                        I enjoy this domain for the technical difficulties that arise when solving said problems.
                    </p>
                </Pannel>
                <Pannel colorId={1} title="Fullstack Development" icon="terminal">
                    <p>
                        I have followed a tech intensive track called the digital tech year during which I honed my
                        Fullstack
                        Development skills. <br/>
                        I have experience developing frontend and backend using multiple tools such as python or
                        javascript.
                        I developed this website using ReactJS.
                        I find development fun and complementary to a lot of problems that relate to data science.
                    </p>
                </Pannel>
                <Pannel colorId={3} title="Data Structures & Algorithms" icon="omega">
                    <p>
                        Since I studied computer science, I have a good grasp over concepts related to algorithmic,
                        data structure or mathematics. <br/>
                        I try to keep a hybrid profile where I am able to comprehend mathematics but also develop
                        software based
                        on these theories. My current algorithmic interests are related to mathematical optimization.
                        I enjoy participating in coding contests to hone and practice skills related to this field.
                    </p>
                </Pannel>
            </Row>
        </Row>
    )
}

function Pannel(props) {
    return (
        <Col md={4} style={{textAlign: "center"}}>
            <div className={'services-box'}>
                <div className={"services color-" + props.colorId}>
                    <div className="icon">
                        <IcoMoon icon={props.icon} className="icon" style={{height: "100%"}}/>
                    </div>
                    <div className="desc">
                        <h3>{props.title} </h3>
                        {props.children}
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default function About() {
    return (
        <div>
            <section className="about">
                <Col md={12}>
                    <AboutDescription/>
                    <AboutExpertise/>
                </Col>
            </section>
        </div>
    )
}
