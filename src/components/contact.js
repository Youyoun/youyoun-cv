import React from 'react';
import SectionHeader from "./sectionHeader";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
    }
  }

  fillForm(evt) {
    this.setState({form: {...this.state.form, [evt.target.name]: evt.target.value}})
  }

  handleSubmit() {
    console.log(this.state.form);
  }

  render() {
    return (
      <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <SectionHeader title={"Get in Touch"} subTitle={"Contact"}/>
          <div className="row justify-content-md-center">
            <div className="col-md-auto animate-box fadeInRight"
                 data-animate-effect="fadeInRight">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input name="name" value={this.state.form.name} onChange={(e) => this.fillForm(e)}
                         type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <input name="email" value={this.state.form.email} onChange={(e) => this.fillForm(e)}
                         type="text" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input name="subject" value={this.state.form.subject} onChange={(e) => this.fillForm(e)}
                         type="text" className="form-control" placeholder="Subject"/>
                </div>
                <div className="form-group">
                          <textarea name="message" value={this.state.form.message} onChange={(e) => this.fillForm(e)}
                                    id="message" cols="30" rows="7" className="form-control" placeholder="Message"/>
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