import React, {useCallback, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import IcoMoon from "react-icomoon";
import "./Introduction.css";
import SlideImg1 from "../../assets/intro-1.jpg"
import SlideImg2 from "../../assets/youyounDTY.jpg"

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
        <a className="btn btn-primary button" href={props.link} id={props.id}
           target="_blank" rel="noopener noreferrer" style={props.style}>
            {props.text} {icon}
        </a>
    )
}

function Carousel(props) {
    const delayTimeInMiliseconds = 1000

    const [currentSlide, setCurrentSlide] = useState(0)
    const [timer, setTimer] = useState(0)
    const [pauseCarousel, setPauseCarousel] = useState(false)

    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide => (currentSlide + 1) % props.children.length)
        setTimer(0)
    }, [props.children.length])

    useEffect(() => {
        if (!pauseCarousel) {
            const startTimer = () => {
                return setInterval(() => setTimer(timer => timer + 1), delayTimeInMiliseconds)
            }
            const timerHandler = startTimer()
            return () => {
                clearInterval(timerHandler)
            }
        }
    }, [pauseCarousel, currentSlide])


    useEffect(() => {
        const swapSlideOnIntervalPass = () => {
            if (timer % props.autoSwapDelay === props.autoSwapDelay - 1) {
                nextSlide()
            }
        }
        swapSlideOnIntervalPass()
    }, [timer, props.autoSwapDelay, props.children.length, nextSlide])

    return (
        <div className={`left-container`}>
            <div className={"carousel-control"}>
                <button className={`slide-control-button ${pauseCarousel ? 'active' : ''}`}
                        onClick={() => setPauseCarousel(!pauseCarousel)}>
                    <i className={'pause-button'}/>
                </button>
                <button className={'slide-control-button'} onClick={() => nextSlide()}>
                    <i className={'arrow-right'}/>
                </button>
            </div>
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
                    <div className={'card left-container'}>
                        <h1 className={'slide-text'}>Hello! I'm Younes</h1>
                        <Button
                            link="CV_younes_belkouchi.pdf"
                            text="View CV" iconClass="folder-download"/>
                    </div>

                </Slide>
                <Slide background={SlideImg2}>
                    <div className={'card left-container'}>
                        <h1 className={'slide-text'}>Check out some of my projects !</h1>
                        <Button
                            link="https://github.com/youyoun"
                            text="View Projects" iconClass="briefcase"/>
                        <Button
                            link="https://scholar.google.com/citations?user=06I0Q1sAAAAJ"
                            text="View Research" iconClass="briefcase"/>
                    </div>
                </Slide>
            </Carousel>
        </section>
    )
}


