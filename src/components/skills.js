import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionHeader from "./sectionHeader";
import "./skills.css"

function SkillBar(props) {
  return (
    <Col md={6}>
      <div className="progress-wrap">
        <h3>{props.skillName}</h3>
        <div className="progress">
          <div className={"progress-bar color-" + props.colorId} style={{width: props.percentProficiency + "%"}}>
            <span>{props.percentProficiency}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

class Skills extends React.Component {
  render() {
    return (
      <section className="skills">
        <SectionHeader title={"My skills"} subTitle={"Skills"}/>
        <Row>
          <Col md={12}>
            <p>These are some of my skills:</p>
          </Col>
          <SkillBar skillName={"Python"} colorId={1} percentProficiency={95}/>
          <SkillBar skillName={"Web development"} colorId={2} percentProficiency={80}/>
          <SkillBar skillName={"Docker"} colorId={3} percentProficiency={80}/>
          <SkillBar skillName={"Linux"} colorId={4} percentProficiency={90}/>
          <SkillBar skillName={"Git"} colorId={6} percentProficiency={80}/>
          <SkillBar skillName={"SGBD"} colorId={5} percentProficiency={80}/>
          <SkillBar skillName={"Learning New Technologies"} colorId={5} percentProficiency={95}/>
          <SkillBar skillName={"Adapt to existing Software"} colorId={9} percentProficiency={100}/>
        </Row>
      </section>
    )
  }
}

export default Skills;