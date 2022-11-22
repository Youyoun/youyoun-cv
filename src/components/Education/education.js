import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from "react-bootstrap/Collapse";
import SectionHeader from "../SectionHeader/sectionHeader";
import "./education.css"


function CollapsableButton(props) {
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title" style={{margin: 0}}>
                    <button className={`collapse-button ${collapse ? "collapsed" : ""}`}
                            onClick={() => setCollapse(!collapse)}>
                        <Row>
                            <Col md={11}>
                                {props.title}
                            </Col>
                            <Col md={1} className={'right-aligned'}>
                                <i className="arrow"/>
                            </Col>
                        </Row>
                    </button>
                </h4>
            </div>
            <Collapse in={collapse}>
                <div style={{margin: 0, padding: 0}}>
                    <div className="panel-body">
                        {props.children}
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default function Education() {
    return (
        <section className="education">
            <SectionHeader title={"Education"} subTitle={"Education"}/>
            <Row>
                <Col md={12}>
                    <div className="fancy-collapse-panel">
                        <div className="panel-group" id="accordion">
                            <CollapsableButton title="Ecole Centrale Paris" buttonId="1">
                                <Col md={12}>
                                    <p>
                                        Ecole Centrale Paris is a prestigious Engineering School, member of France’s
                                        Grandes Ecoles, that
                                        uses a highly selective international admission process.
                                    </p>
                                    Courses include:
                                    <Row>
                                        <Col md={6}>
                                            <li>Mathematics and Statistics</li>
                                            <li>Object Oriented Programming</li>
                                            <li>Databases and database optimization</li>
                                            <li>Theoretical Computer Science</li>
                                        </Col>
                                        <Col md={6}>
                                            <li>Machine Learning & Deep Learning</li>
                                            <li>Algebra & Cryptography</li>
                                            <li>Information System Architectures</li>
                                            <li>Algorithmic</li>
                                        </Col>
                                    </Row>
                                </Col>
                            </CollapsableButton>
                            <CollapsableButton title="Al khawarizmi Foundation Courses" buttonId="2">
                                <p>
                                    Foundation courses is a 2-year school program following high school where students
                                    study intensively
                                    science and are forced to take an international ranking test where they are highly
                                    selected
                                    depending on their rank in order to enroll to their chosen schools.
                                </p>
                            </CollapsableButton>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}
