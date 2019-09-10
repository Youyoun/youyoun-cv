import React from 'react';

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
                                    <span className="heading-meta">About Us</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p>
                                        I am a computer grad student from DAIICT-Gandhinagar with ICT
                                        as my major.I love exploring new technologies and often amazed
                                        by the progress we as a human species have mad so far in the
                                        recent years (apart from the headphone-jack part!!)
                                    </p>
                                    <p>
                                        I have started reflecting my ideas and thougths through the
                                        medium of words recently so spelling and grammer mistaks are
                                        very often.You can write me back if you spot any and don't
                                        want to live anymore :P{" "}
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
                        <span className="heading-meta">What I do?</span>
                        <h2 className="colorlib-heading">Here are some of my expertise</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                    <Pannel colorId={1} title="Web Development" icon="icon-bulb"
                            text="I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS"/>
                    <Pannel colorId={3} title="Data Structures & Algorithms" icon="icon-phone3"
                            text="As coming from the CS background, I have good grasp over fundamental concepts of DSA"/>
                    <Pannel colorId={5} title="Dev Ops" icon="icon-data"
                            text="I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s"/>
                </div>
            </div>
        </section>
    )
}

function Pannel(props) {
    return (
        <div className="col-md-4 text-center animate-box">
            <div className={"services color-" + props.colorId}>
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