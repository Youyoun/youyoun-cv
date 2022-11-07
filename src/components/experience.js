import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionHeader from "./sectionHeader";
import IcoMoon from "react-icomoon";
import "./experience.css";

function TimelinePane(props) {
  return (
    <article className="timeline-entry">
      <div className="timeline-entry-inner">
        <div className={"timeline-icon color-" + props.colorId}>
          {props.icon ? <IcoMoon icon={props.icon}/> : ""}
        </div>
        {props.children ?
          <div className="timeline-label">
            {props.children}
          </div> : ""
        }
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <div>
      <section className="experience">
        <SectionHeader title={"Highlights"} subTitle={"Work Experience"}/>
        <Row>
          <Col md={12}>
            <div className="timeline-centered">
              <TimelinePane colorId={7} icon={"book"}>
                <h2>PhD Student at CentraleSupelec and Gustave Roussy <span>(10/2020-present, Paris FR)</span>
                </h2>
                <p>
                  The goal of my thesis is to identify prognostic or predictive imaging biomarkers using machine learning
                  to determine if a patient will respond or not to immunotherapy.
                </p>
              </TimelinePane>
              <TimelinePane colorId={2} icon={"images"}>
                <h2>Data scientist at Institut Gustave Roussy <span>(03/2020-10/2020, Paris FR)</span>
                </h2>
                <p>
                  My current work involves identifying relapse in breast cancer using histopathology images. <br/>
                  It involves using Deep Neural networks to identify regions that are more susceptible to cause a
                  relapse in a patient.
                </p>
              </TimelinePane>
              <TimelinePane colorId={3} icon={"book"}>
                <h2>Data Science Internship at BNPP CIB Analytics Consulting - AI
                  Lab <span>(05/2019-11/2019, Paris FR)</span>
                </h2>
                <p>
                  I joined BNP Paribas as a Data science intern. My work involves researching new
                  techniques used in state of the art models and test them to validate these results. <br/>
                  Through this internship, I was able to deepen my knowledge of machine learning and see how ML software
                  can be used in the industry.
                </p>
              </TimelinePane>
              <TimelinePane colorId={4} icon={"stack"}>
                <h2>Software & Machine Learning Intern at xBrain <span>(08/2017-02/2018, CA US)</span></h2>
                <p>
                  During my internship at xBrain, I had the opportunity to work with a very passionate team on a
                  subject involving multiple tasks, be it machine learning, full stack development and even
                  algorithm optimisation. <br/>
                  I used NLP for processing textual data, different clusterisation algorithms on huge quantity of
                  scrapped data. <br/>
                  I also developed micro services that interact with each other using API's. These micro services were
                  all dockerized.
                </p>
              </TimelinePane>
              <TimelinePane colorId={5} icon={"clipboard"}>
                <h2>Software developer & Agile Prototyper at Paris Digital
                  Lab <span>(01/2017-07/2017, Paris FR)</span></h2>
                <div>
                  The Paris Digital Lab is a program based in agile prototyping oriented towards innovation and
                  design-thinking.
                  The aim is for students to become proficient in all kinds of technologies, through the making of
                  real-world projects for high tech businesses.
                </div>
                <div>During this tracks, I created three prototypes:</div>
                <div> → Capgemini: Voice Print Authentication</div>
                <div> → Foncia: Chatbot using NLP and Machine Learning.</div>
                <div> → Le Peuple Habile: IoT and NLP</div>
                <div>
                  As a plus, I also Helped a 30 student class through a Coding Week on full stack development after
                  the end of the track.
                </div>
              </TimelinePane>
              <TimelinePane colorId={6} icon={"codepen"}>
                <h2>Secretary & IT Developer at VIA Centrale Reseaux <span>(2016-2017, Paris FR)</span></h2>
                <div>
                  VIA is a student association that manages and develops digital services for the student housing
                  network & IP-TV management for 1200 people, Cluster virtualization of more than 100 VM,
                  Team management of 20 people, 100k€ of budget, Partnerships with IT leader companies
                  in France.
                </div>
              </TimelinePane>
              <TimelinePane colorId={"none"}/>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  )
}
