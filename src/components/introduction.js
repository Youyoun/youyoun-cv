import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import IcoMoon from "react-icomoon";
import "./Introduction.css";

function Slide({background, children}) {
  return (
    <div className={`slide`} style={{backgroundImage: background}}>
      <Container>
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
    <a className="btn btn-primary button"
       href={props.link}
       target="_blank" rel="noopener noreferrer" style={props.style}>
      {props.text} {icon}
    </a>
  )
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n_slides: 0,
      current_slide: 0,
      slides: [null],
      start: Date.now(),
      timer: 0,
      interval: 10,
    }
  }

  componentDidMount() {
    this.setState({
      slides: this.props.children,
      n_slides: this.props.children.length,
      interval: this.props.autoSwapDelay,
      fadeEffect: ""
    });
    this.startTimer();
  }

  nextSlide() {
    this.setState({fadeEffect: "fadeOut"}, () => {
        setTimeout(() => this.setState({
          current_slide: (this.state.current_slide + 1) % this.state.n_slides,
          fadeEffect: "fadeIn"
        }), 2000)
      }
    )
  }

  startTimer() {
    this.timer = setInterval(() => this.setState({
      timer: Date.now() - this.state.start
    }, () => this.swapSlideOnIntervalPass()), 1000)
  }

  swapSlideOnIntervalPass() {
    if (Math.floor(this.state.timer / 1000) % this.state.interval === 0) {
      this.nextSlide();
    }
  }

  render() {
    return (
      <div className={`slide-container ${this.state.fadeEffect}`}>
        {this.state.slides[this.state.current_slide]}
      </div>
    )
  }
}

export default class Introduction extends Component {
  render() {
    return (
      <section id="introduction">
        <Carousel autoSwapDelay={7}>
          <Slide background="url(images/intro-1.jpg)">
            <h1>Hello! <br/>I'm Younes</h1>
            <Button
              link=""
              text="View CV" iconClass="folder-download"/>
          </Slide>
          <Slide background="url(images/youyounDTY.jpg)">
            <h1 style={{color: "white"}}>I'm a tech enthousiast !</h1>
            <Button
              link="https://github.com/youyoun" style={{border: "1px solid #fff", color: "white", background: 0}}
              text="View Projects" iconClass="briefcase"/>
          </Slide>
        </Carousel>
      </section>
    )
  }
}

