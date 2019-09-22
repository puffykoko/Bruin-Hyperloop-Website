import React from 'react';
import './Team.css';

import linkedInGrey from "./images/logos/linked-in-icon-grey.png";
import linkedInBlack from "./images/logos/linked-in-icon-black.png";

var board = require('./Members').board;
var leads = require('./Members').leads;



class Member extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn(){
     this.setState({ hover: true });

   }

   hoverOff(){
     this.setState({ hover: false });

   }

  render(){

    var linkedInIcon = (this.state.hover ? linkedInGrey: linkedInBlack);

    return(
      <div className="Member">
        <div className="Headshot-Container">
          <img className="Headshot" src={require('./images/headshots' + this.props.imgURL)}/>
        </div>
        <p className="Name"> {this.props.name} </p>
        <p className="Position"> {this.props.position} </p>
        <p className="Major"> {this.props.major + ", " + this.props.class} </p>
        <p className="Biography"> {this.props.bio} </p>

        <a  className="icon" href={this.props.linkedinURL}>

          <img src={linkedInIcon} onMouseOver={this.hoverOn}
            onMouseLeave={this.hoverOff}/>
        </a>
      </div>

    );
  }
}

function SubTeam(props){

  const memberArray = props.members.map((member) =>
    <Member name={member.name}
            position={member.position}
            imgURL={member.imgURL}
            linkedinURL={member.linkedinURL}
            bio = {member.bio}
            major = {member.major}
            class = {member.class}
            />)

  return(
    <div className="SubTeam">
      <h3> {props.title} </h3>
      <div className="Rows">
        {memberArray}
      </div>
    </div>
  );
}

function Team() {
  return (
    <div>
      <SubTeam title='Board' members={board}/>
      <SubTeam title='Technical Leads' members={leads}/>
    </div>
  );
}

export default Team;
