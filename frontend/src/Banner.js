import React from 'react';
import './Banner.css';
import ContactForm from './ContactForm'
import Gears from './Gears'

class Banner extends React.Component {

  constructor() {
    super();
    this.state = {
      showGears: true,
      showForm: false,
      showThankYou: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {

    if (this.state.showGears){
      this.setState({showGears: false, showForm: true});
    }
    else if (this.state.showThankYou){
      this.setState({showForm: true, showThankYou: false });
    }

  }

  handleSubmit(){
    this.setState({showThankYou: true, showForm: false});
  }

  render() {

    const formClass = this.state.showForm ? "show" : "hide";
    const buttonClass = this.state.showForm ? "Contact-Button active" : "Contact-Button";
    var bannerRightClass = null;

    if (this.state.showForm){
       bannerRightClass = "BannerRight HoldForm";
    }
    else if (this.state.showThankYou){
       bannerRightClass="BannerRight HoldThankYou"
    }
    else {
       bannerRightClass = "BannerRight";
    }


    return (
      <div>
        <div className="Banner">

          <div className="BannerLeft">
            <h1 className="BannerTitle">
              Help us grow.
            </h1>
            <p className="BannerText">
              Our work relies on the financial support of organizations such as
              yours. Please consider supporting us in building the future of
              tranportation.
            </p>
            <button className={buttonClass} onClick={this.handleClick}>
              Contact
            </button>
          </div>

          <div className={bannerRightClass}>
                {this.state.showGears &&
                  <div>
                    <Gears/>
                    <div className="Gears-Filler">
                    </div>
                  </div>}
              <div className={formClass}>
                {this.state.showForm && <ContactForm handleSubmit={this.handleSubmit}/>}
              </div>

              <div>
                {this.state.showThankYou &&
                  <div>
                    <p className="Thank-You">Thank You. We'll get back to you as soon as possible.</p>
                    <div className="Thank-You-Filler">
                    </div>
                  </div>}
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Banner;
