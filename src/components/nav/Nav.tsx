import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    <Link to="/" className="nav-item">
      🎊 EventList
    </Link>
  </div>
);

export default Nav;
