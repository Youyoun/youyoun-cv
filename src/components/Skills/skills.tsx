import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionHeader from "../SectionHeader/sectionHeader";
import "./skills.css"

type SkillBarProps = {
    skillName: string
    colorId: number
    percentProficiency: number
}

function SkillBar(props: SkillBarProps) {
    return (
        <Col md={6}>
            <div className="progress-wrap">
                <h3>{props.skillName}</h3>
                <div className="progress">
                    <div className={"progress-bar color-" + props.colorId}
                         style={{width: props.percentProficiency + "%"}}>
                        <span>{props.percentProficiency}</span>
                    </div>
                </div>
            </div>
        </Col>
    )
}

function Skills() {
    return (
        <section className="skills">
            <SectionHeader title={"My skills"} subTitle={"Skills"}/>
            <Row>
                <Col md={12}>
                    <p>These are some of the skills that I find interesting to develop and work on
                        and that I try to hone through my work. The values displays are of course just for fun and
                        shouldn't be considered absolute:</p>
                </Col>
                <SkillBar skillName={"Python"} colorId={1} percentProficiency={95}/>
                <SkillBar skillName={"Web development"} colorId={2} percentProficiency={80}/>
                <SkillBar skillName={"Docker"} colorId={3} percentProficiency={80}/>
                <SkillBar skillName={"Linux"} colorId={4} percentProficiency={95}/>
                <SkillBar skillName={"Git"} colorId={6} percentProficiency={80}/>
                <SkillBar skillName={"SGBD"} colorId={5} percentProficiency={85}/>
                <SkillBar skillName={"Project Management"} colorId={1} percentProficiency={80}/>
                <SkillBar skillName={"Learn and Adapt to New Technologies"} colorId={3} percentProficiency={95}/>
            </Row>
        </section>
    )
}

export default Skills;
