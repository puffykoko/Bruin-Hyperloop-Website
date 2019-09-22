import React from 'react';
import './Sponsors.css';
import ContactForm from './ContactForm'
import Banner from './Banner'


const sponsorsList = [
              {name: "Altium", imgURL: "/altium-logo.png", website: "https://www.altium.com/"},
              {name: "Ansys", imgURL: "/ansys-logo.png", website: "https://www.ansys.com/"},
              {name: "Texas Instruments", imgURL: "/texas-instruments-logo.png", website: "http://www.ti.com/"},
              ];




function Sponsor(props){
  return(
    <div className="Sponsor">
        <a href={props.website} target="_blank">
          <img src={require('./images/sponsors' + props.imgURL)} />
        </a>
    </div>
  );
}

function Sponsors() {

  const sponsorsArray = sponsorsList.map((sponsor) =>
    <Sponsor imgURL = {sponsor.imgURL} website = {sponsor.website}/>)

  return (
    <div className="Sponsors">
        {sponsorsArray}
    </div>
  );
}



function SponsorsPage(){
  return(
    <div>
    <Banner/>

    <div className="SponsorsPage">
      <h3 className="SponsorTitle"> Our Sponsors </h3>
      <Sponsors/>
    </div>
    </div>
  );
}

export default SponsorsPage;
