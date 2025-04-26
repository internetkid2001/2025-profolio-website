import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`vertical-navbar ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-name" onClick={() => setMenuOpen(false)}>Victor Grisson</Link>
        <Link to="/direction" className={location.pathname === '/direction' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Direction</Link>
        <Link to="/photography" className={location.pathname === '/photography' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Photography</Link>
        <Link to="/photo-projects" className={location.pathname === '/photo-projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Photo Projects</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </>
  );
};

export default Navbar;
