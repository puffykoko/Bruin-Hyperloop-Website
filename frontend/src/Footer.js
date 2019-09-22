import React from 'react';
import './Footer.css'


function Footer(){
  return(
    <div className="Footer">

      <div className="Social-Media">
         <a href = "https://www.facebook.com/bruinhyperloop/" target="_blank" > <img src={require('./images/logos/facebook-logo.png')}/> </a>
        <a href = "https://www.instagram.com/bruinhyperloop/" target="_blank" > <img src={require('./images/logos/instagram-logo.png')}/> </a>
      </div>

      <div className="Footer-Text">
        <p>Created by Matthew Ko + Meilin Cui</p>
        <p>© Bruin Hyperloop at UCLA</p>
     </div>

    </div>

  );
}

export default Footer;
