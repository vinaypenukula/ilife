import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="header">
      <button className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="logo">Vinay Kumar</div>
    </nav>
  );
}

export default Navbar;
