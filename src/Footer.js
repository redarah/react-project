import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Info:</h4>
            <ui className="list-unstyled">
              <li>342-420-6969</li>
              <li>Ottawa, Canada</li>
              <li>123 Streeet South North</li>
            </ui>
          </div>
          
          {/* Column2 */}
          <div className="col">
            <h4>Heures d'ouverture :</h4>
            <ui className="list-unstyled">
              <li>Lundi au Vendredi: 9:00 AM to 8:00 PM</li>
              <li> Samedi: 10:00 AM to 6:00 PM</li>
              
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Abonnez-vous!</h4>
            <ui className="list-unstyled">
            
              <li> <FaFacebookF/> Facebook</li>
              <li> <FaInstagram/> Instagram</li>
              <li> <FaYoutube/> Youtube</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} LIVERPOOL-KIT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;