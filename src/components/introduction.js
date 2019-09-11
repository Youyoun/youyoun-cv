import React from 'react';

function Slide(props) {
  return (
    <li style={{backgroundImage: props.background}}>
      <div className="overlay"/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div className="slider-text-inner">
              <div className="desc">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

function Button(props) {
  return (
    <p>
      <a className="btn btn-primary btn-learn"
         href={props.link}
         target="_blank" rel="noopener noreferrer">{props.text}
        {props.iconClass ? <i className={props.iconClass}/> : null}
      </a>
    </p>
  )
}

export default function Introduction(props) {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <Slide background="url(images/intro-1.jpg)">
              <h1>Hello! <br/>I'm Younes</h1>
              <Button
                link=""
                text="View CV" iconClass="icon-download4"/>
            </Slide>
            <Slide background="url(images/intro-1.jpg)">
              <h1>I'm a tech enthousiast !</h1>
              <Button
                link="https://github.com/youyoun"
                text="View Projects" iconClass="icon-briefcase3"/>
            </Slide>
          </ul>
        </div>
      </section>
    </div>
  )
}
