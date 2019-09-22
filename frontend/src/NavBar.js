import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import './NavBar.css';

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      showMenu : false, width: 0, height: 0,
    }
   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
   this.toggleMenu = this.toggleMenu.bind(this);
  }

   componentDidMount() {
     this.updateWindowDimensions();
     window.addEventListener('resize', this.updateWindowDimensions);
   }

   componentWillUnmount() {
     window.removeEventListener('resize', this.updateWindowDimensions);
   }

   updateWindowDimensions() {
     this.setState({ width: window.innerWidth, height: window.innerHeight });
   }

  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu});
  }

  render(){

    const classes = this.state.showMenu ? " NavBar Show" : " NavBar";
    const applyStyle = (this.state.width < 700) ? "Link" : "Button";

    return(
      <div className=" Header">
          <h3>Bruin Hyperloop</h3>
          <div className="Menu-Icon" onClick={this.toggleMenu}>
            <div className="Bar">  </div>
            <div className="Bar">  </div>
            <div className="Bar">  </div>
          </div>
          <div className={classes}>
            <NavLink to = "/" exact activeClassName="active" className="Link">
              About
            </NavLink>
            <NavLink to="/team/" activeClassName="active" className="Link">
              Team
            </NavLink>
            <NavLink to = "/sponsors/" activeClassName="active" className="Link">
            Sponsors
            </NavLink>
            <NavLink to = "/apply/" activeClassName="active" className={applyStyle}>
            Apply
            </NavLink>
          </div>
      </div>
    );
  }
}

export default Header;
