import React, {useCallback, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import IcoMoon from "react-icomoon";
import "./Introduction.css";
import SlideImg1 from "../assets/intro-1.jpg"
import SlideImg2 from "../assets/youyounDTY.jpg"

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

    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide => (currentSlide + 1) % props.children.length)
    }, [props.children.length])

    useEffect(() => {
        const start = Date.now()
        const startTimer = () => {
            return setInterval(() => setTimer(Date.now() - start), delayTimeInMiliseconds)
        }
        const timerHandler = startTimer()
        return () => {
            clearInterval(timerHandler)
        }
    }, [currentSlide])


    useEffect(() => {
        const swapSlideOnIntervalPass = () => {
            if (Math.floor(timer / delayTimeInMiliseconds) % props.autoSwapDelay === props.autoSwapDelay - 1) {
                nextSlide()
            }
        }
        swapSlideOnIntervalPass()
    }, [timer, props.autoSwapDelay, props.children.length, nextSlide])

    return (
        <div className={`slide-container`}>
            <button className={'slide-swap-button'} onClick={() => nextSlide()}>
                <i className={'arrow-right'}/>
            </button>
            <span>
            {props.children[currentSlide]}
            </span>
        </div>
    )
}

export default function Introduction() {
    return (
        <section id="introduction">
            <Carousel autoSwapDelay={7}>
                <Slide background={SlideImg1}>
                    <h1 className={"slide1-text"}>Hello! <br/>I'm Younes</h1>
                    <Button
                        id="slide1-button"
                        link="CV_younes_belkouchi.pdf"
                        text="View CV" iconClass="folder-download"/>
                </Slide>
                <Slide background={SlideImg2}>
                    <h1 className={"slide1-text"}>Check out some of my projects !</h1>
                    <Button
                        className="slide1-button"
                        link="https://github.com/youyoun"
                        text="View Projects" iconClass="briefcase"/>
                    <Button
                        id="second-button"
                        className="slide1-button"
                        link="https://scholar.google.com/citations?user=06I0Q1sAAAAJ"
                        text="View Research" iconClass="briefcase"/>
                </Slide>
            </Carousel>
        </section>
    )
}


