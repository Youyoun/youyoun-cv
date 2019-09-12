import React from 'react';
import SectionHeader from "./sectionHeader";

class Contact extends React.Component {
  render() {
    return (
      <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <SectionHeader title={"Get in Touch"} subTitle={"Contact"}/>
          <div className="row justify-content-md-center">
            <div className="col-md-auto animate-box fadeInRight"
                 data-animate-effect="fadeInRight">
              <form action="">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject"/>
                </div>
                <div className="form-group">
                          <textarea name="" id="message" cols="30" rows="7" className="form-control"
                                    placeholder="Message"/>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary btn-send-message" value="Send Message"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;