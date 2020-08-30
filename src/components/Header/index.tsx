import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header.css';

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul className="main-nav__list">
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