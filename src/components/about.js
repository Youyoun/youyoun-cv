import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import IcoMoon from "react-icomoon";

import "./about.css"

function AboutDescription() {
  return (
    <section className="about">
      <Row>
        <Col md={12}>
          <span className="heading-meta">About Me</span>
          <h2 className="heading">Who Am I?</h2>
          <p>
            I am an graduate student from Ecole Centrale Paris, a leading french engineering school.
            I have always been passionate about IT. I am currently taking a huge interest in everything
            that is related to machine learning or deep learning, and especially their application to the
            industry.
          </p>
          <p>
            Beside my adoration for technlogy, I also enjoy playing video games and indoor climbing.
          </p>
        </Col>
      </Row>
    </section>
  )
}

function AboutExpertise() {
  return (
    <section className="about">
      <Row>
        <Col md={6}>
          <h2 className="heading">What do I do?</h2>
        </Col>
      </Row>
      <Row>
        <Pannel colorId={5} title="Machine Learning" icon="database"
                text="I have followed multiple courses related to machine learning and deep learning, and worked on different projects that use these tools. My current work at BNP Paribas is mainly focused on deep learning."/>
        <Pannel colorId={1} title="Fullstack Development" icon="terminal"
                text="I have experience using Python and JS frameworks such as React and NodeJs, and am comfortable with HTML and CSS."/>
        <Pannel colorId={3} title="Data Structures & Algorithms" icon="omega"
                text="Since I studied computer science, I have a good grasp over concepts related to algorithmic, data structure or mathematics"/>
      </Row>
    </section>
  )
}

function Pannel(props) {
  return (
    <Col md={4} style={{textAlign: "center"}}>
      <div className={"services color-" + props.colorId} style={{height: "350px"}}>
        <div className="icon">
            <IcoMoon icon={props.icon} className="icon" style={{height: "100%"}}/>
        </div>
        <div className="desc">
          <h3>{props.title} </h3>
          <p>{props.text}</p>
        </div>
      </div>
    </Col>
  )
}

export default function About() {
  return (
    <div>
      <AboutDescription/>
      <AboutExpertise/>
    </div>
  )
}