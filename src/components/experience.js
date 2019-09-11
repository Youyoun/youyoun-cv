import React from 'react';

function TimelinePane(props) {
  return (
    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
      <div className="timeline-entry-inner">
        <div className={"timeline-icon color-" + props.colorId}>
          <i className={props.icon}/>
        </div>
        <div className="timeline-label">
          {props.children}
        </div>
      </div>
    </article>
  )
}

export default function Experience(props) {
  return (
    <div>
      <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">highlights</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <TimelinePane colorId={3} icon={"icon-data"}>
                  <h2>Data Science Internship at BNPP CIB Analytics Consulting - AI
                    Lab <span>(2019-present, Paris FR)</span>
                  </h2>
                  <p>I joined BNP Paribas as a intern working on Data science. My work involves researching new
                    techniques used in state of the art models
                    and test them to validate these results. Multiple framework have been adapted to the use case of
                    the lab. I have also implemented some models for the sake of testing.
                    I've deepened my knowledge of machine learning throughout this internship, and was able to see how
                  </p>
                </TimelinePane>
                <TimelinePane colorId={4} icon={"icon-cog"}>
                  <h2>Software & Machine Learning Intern at xBrain <span>(08/2017-02/2018, CA US)</span></h2>
                  <p>
                    During my internship at xBrain, I had the opportunity to work with a very passionate team on a
                    subject involving multiple tasks, be it machine learning, full stack development and even
                    algorithm optimisation.
                    I used NLP for processing textual data, different clusterisation algorithms. I also developed
                    micro services that interact with each other using API's. These micro services were all
                    dockerized.
                  </p>
                </TimelinePane>
                <TimelinePane colorId={5} icon={"icon-device-desktop"}>
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
                <TimelinePane colorId={6} icon={"icon-code"}>
                  <h2>Secretary & IT Developer at VIA Centrale Reseaux <span>(2016-2017, Paris FR)</span></h2>
                  <div>
                    VIA is a student association that manages and develops digital services for the student housing
                    network & IP-TV management for 1200 people, Cluster virtualization of more than 100 VM,
                    Team management of 20 people, 100k€ of budget, Partnerships with IT leader companies
                    in France.
                  </div>
                </TimelinePane>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}