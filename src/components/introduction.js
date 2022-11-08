import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import IcoMoon from "react-icomoon";
import "./Introduction.css";

function Slide({background, children}) {
    return (
        <div className={`slide`} style={{backgroundImage: `url(${background})`}}>
            <Container className={"no-margin-left"}>
                <Col xs={12} md={8}>
                    {children}
                </Col>
            </Container>
        </div>
    )
}

function Button(props) {
    let icon = props.iconClass ? <IcoMoon icon={props.iconClass}/> : null;
    return (
        <a className="btn btn-primary button" id={props.id}
           href={props.link}
           target="_blank" rel="noopener noreferrer" style={props.style}>
            {props.text} {icon}
        </a>
    )
}

function Carousel(props) {
    const delayTimeInMiliseconds = 1000

    const [currentSlide, setCurrentSlide] = useState(0)
    const [timer, setTimer] = useState(0)


    useEffect(() => {
        const start = Date.now()
        const startTimer = () => {
            setInterval(() => setTimer(Date.now() - start), delayTimeInMiliseconds)
        }
        startTimer()
    }, [])


    useEffect(() => {
        const swapSlideOnIntervalPass = () => {
            if (Math.floor(timer / delayTimeInMiliseconds) % props.autoSwapDelay === props.autoSwapDelay - 1) {
                setCurrentSlide(currentSlide => (currentSlide + 1) % props.children.length)
            }
        }
        swapSlideOnIntervalPass()
    }, [timer, props.autoSwapDelay, props.children.length])

    return (
        <div className={`slide-container`}>
            {props.children[currentSlide]}
        </div>
    )
}

export default function Introduction() {
    return (
        <section id="introduction">
            <Carousel autoSwapDelay={7}>
                <Slide background="images/intro-1.jpg">
                    <h1 id={"slide1-text"}>Hello! <br/>I'm Younes</h1>
                    <Button
                        id="slide1-button"
                        link="CV_younes_belkouchi.pdf"
                        text="View CV" iconClass="folder-download"/>
                </Slide>
                <Slide background="images/youyounDTY.jpg">
                    <h1 style={{color: "white"}}>Check out some of my projects !</h1>
                    <Button
                        id="slide1-button"
                        link="https://github.com/youyoun"
                        text="View Projects" iconClass="briefcase"/>
                    <Button
                        id="slide1-button"
                        style={{marginLeft: '5px'}}
                        link="https://scholar.google.com/citations?user=06I0Q1sAAAAJ"
                        text="View Research" iconClass="briefcase"/>
                </Slide>
            </Carousel>
        </section>
    )
}


