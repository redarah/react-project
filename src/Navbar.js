import Nav from 'react-bootstrap/Nav';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Liverpool kit </h1>
      <div className="links">
        
        <Link to="/choix">Choix de t-shirts</Link>
        <Link to="/ambassadeur">Nos Ambassadeur</Link>
        <Link to="/avis" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Avis</Link>
      </div>
    </nav>
  );
}

export default Navbar;