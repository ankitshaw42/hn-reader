import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-orange-500 text-white p-2 text-sm md:text-base fixed top-0 w-full shadow">
      <nav>
        <ul className="flex items-center">
          <li className="w-6 h-6 sm:w-8 sm:h-8">
            <Link to="/top">
              <img src="/favicon.png" alt="hacker news icon" />
            </Link>
          </li>

          <li className="mx-2">
            <NavLink to="/news">Top</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/newest">New</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/show">Show</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/ask">Ask</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
