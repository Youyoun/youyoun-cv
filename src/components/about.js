import React from 'react';
import SectionHeader from "./sectionHeader";

function AboutDescription(props) {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>
                    I am an graduate student from Ecole Centrale Paris, a leading french engineering school.
                    I have always been passionate about IT. I am currently taking a huge interest in everything
                    that is related to machine learning or deep learning, and especially their application to the
                    industry.
                  </p>
                  <p>
                    Beside my adoration for technlogy, I also enjoy playing video games and indoor climbing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutExpertise(props) {
  return (
    <section className="colorlib-about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <h2 className="colorlib-heading">What do I do?</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          <Pannel colorId={5} title="Machine Learning" icon="icon-data"
                  text="I have followed multiple courses related to machine learning and deep learning, and worked on different projects that use these tools. My current work at BNP Paribas is mainly focused on deep learning."/>
          <Pannel colorId={1} title="Fullstack Development" icon="icon-bulb"
                  text="I have experience using Python and JS frameworks such as React and NodeJs, and am comfortable with HTML and CSS."/>
          <Pannel colorId={3} title="Data Structures & Algorithms" icon="icon-phone3"
                  text="Since I studied computer science, I have a good grasp over concepts related to algorithmic, data structure or mathematics"/>
        </div>
      </div>
    </section>
  )
}

function Pannel(props) {
  return (
    <div className="col-md-4 text-center animate-box">
      <div className={"services color-" + props.colorId} style={{height: "350px"}}>
                <span className="icon">
                    <i className={props.icon}/>
                </span>
        <div className="desc">
          <h3>{props.title} </h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default function About(props) {
  return (
    <div>
      <AboutDescription/>
      <AboutExpertise/>
    </div>
  )
}