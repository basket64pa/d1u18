import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Basket 64</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/calendrier">Calendrier</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Palmares">Palmares</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classement">Classement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/statistiques">Statistiques</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;