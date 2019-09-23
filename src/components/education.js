import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from "react-bootstrap/Collapse";
import SectionHeader from "./sectionHeader";
import "./education.css"


function CollapsableButton(props) {
  const [collapse, setCollapse] = useState(false);

  function toggleCollapse() {
    setCollapse(!collapse);
  }

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title" style={{margin: 0}}>
          <a href="#education" onClick={toggleCollapse} className={collapse ? "collapsed" : ""}>
            {props.title}
          </a>
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
                    Ecole Centrale Paris is a prestigious Engineering School, member of France’s Grandes Ecoles, that
                    uses a highly selective internationnal admission process.
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
                  Fundation courses is a 2-year school program following high school where students study intensively
                  science and are forced to take an international ranking test where they are highly selected
                  depending on their rank in order to enroll to their chosen schools.
                </p>
              </CollapsableButton>
              {/*<CollapsableButton title="Ryad Al Maari                  <div className="col-md-6">
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                      language ocean.</p>
                  </div>fa" buttonId="3">*/}
              {/*  <p>*/}
              {/*    A Morroccan school where I've spent most of school year, from late primary until I obtained my high*/}
              {/*    school diploma.*/}
              {/*  </p>*/}
              {/*</CollapsableButton>*/}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}