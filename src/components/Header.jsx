import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../styles/header.css';

const Navbar = () => {
  return (
    <header className="top-header">
      <nav className="top-nav">
        <ul className="top-nav__links">
          <li>
            <Link to="/top">
              <img src="/favicon.png" alt="hacker news icon" />
            </Link>
          </li>

          <li>
            <NavLink to="/top">Top</NavLink>
          </li>
          <li>
            <NavLink to="/new">New</NavLink>
          </li>
          <li>
            <NavLink to="/show">Show</NavLink>
          </li>
          <li>
            <NavLink to="/ask">Ask</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
