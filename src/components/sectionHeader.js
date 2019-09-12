import React from "react";

export default function SectionHeader(props) {
  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft">
        <span className="heading-meta">{props.title}</span>
        <h2 className="colorlib-heading animate-box">{props.subTitle}</h2>
      </div>
    </div>
  )
}