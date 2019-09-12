import React from 'react';
import SectionHeader from "./sectionHeader";

function SkillBar(props) {
  return (
    <div className="col-md-6 animate-box fadeInLeft" data-animate-effect="fadeInLeft">
      <div className="progress-wrap">
        <h3>{props.skillName}</h3>
        <div className="progress">
          <div className={"progress-bar color-" + props.colorId} role="progressbar"
               aria-valuenow={props.percentProficiency} aria-valuemin="0" aria-valuemax="100"
               style={{width: props.percentProficiency + "%"}}>
            <span>{props.percentProficiency}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

class Skills extends React.Component {
  render() {
    return (
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <SectionHeader title={"My skills"} subTitle={"Skills"}/>
          <div className="row">
            <div className="col-md-12 animate-box fadeInLeft" data-animate-effect="fadeInLeft">
              <p>Need to think about this</p>
            </div>
            <SkillBar skillName={"Python"} colorId={1} percentProficiency={95}/>
            <SkillBar skillName={"Web development"} colorId={2} percentProficiency={75}/>
            <SkillBar skillName={"Docker"} colorId={3} percentProficiency={80}/>
            <SkillBar skillName={"Linux"} colorId={4} percentProficiency={90}/>
            <SkillBar skillName={"Git"} colorId={6} percentProficiency={80}/>
            <SkillBar skillName={"SGBD"} colorId={5} percentProficiency={80}/>
            <SkillBar skillName={"Learning New Technologies"} colorId={5} percentProficiency={95}/>
            <SkillBar skillName={"Adapt to existing Software"} colorId={9} percentProficiency={100}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;