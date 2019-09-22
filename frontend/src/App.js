import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from './About';
import Team from './Team';
import Sponsors from './Sponsors';
import Apply from './Apply'
import Header from './NavBar'
import Footer from './Footer'




 function AppRouter() {
   return (
     <Router>

       <div className="App">

         <Header/>
         <div className="Divider"> </div>

         <Route path="/" exact component={About} />
         <Route path="/team/" component={Team} />
         <Route path="/sponsors/" component={Sponsors} />
         <Route path="/apply/" component={Apply} />

       </div>
       <div className="Divider"> </div>

       <Footer/>
     </Router>
   );
 }

export default AppRouter;
