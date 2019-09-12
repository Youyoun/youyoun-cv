import React from 'react';
import SectionHeader from "./sectionHeader";

function CollapsableButton(props) {
  const heading = "heading" + props.buttonId;
  const collapse = "collapse" + props.buttonId;
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id={heading}>
        <h4 className="panel-title">
          <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
             href={"#" + collapse} aria-expanded="false" aria-controls={collapse}>
            {props.title}
          </a>
        </h4>
      </div>
      <div id={collapse} className="panel-collapse collapse" role="tabpanel"
           aria-labelledby={heading} aria-expanded="false">
        <div className="panel-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default function Education(props) {
  return (
    <section className="colorlib-education">
      <div className="colorlib-narrow-content">
        <SectionHeader title={"Education"} subTitle={"Education"}/>
        <div className="row">
          <div className="col-md-12 animate-box">
            <div className="fancy-collapse-panel">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <CollapsableButton title="Ecole Centrale Paris" buttonId="1">
                  <div className="col-md-12">
                    <p>
                      Ecole Centrale Paris is a prestigious Engineering School, member of France’s Grandes Ecoles, that
                      uses a highly selective internationnal admission process.
                    </p>
                    Courses include:
                    <div className="row">
                      <div className="col-md-6">
                        <li>Mathematics and Statistics</li>
                        <li>Object Oriented Programming</li>
                        <li>Databases and database optimization</li>
                        <li>Theoretical Computer Science</li>
                      </div>
                      <div className="col-md-6">
                        <li>Machine Learning & Deep Learning</li>
                        <li>Algebra & Cryptography</li>
                        <li>Information System Architectures</li>
                        <li>Algorithmic</li>
                      </div>
                    </div>
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}