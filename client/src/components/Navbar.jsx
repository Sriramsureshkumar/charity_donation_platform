import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  const isLoggedIn = Auth.loggedIn();

  return (
    <nav className="bg-purple-700 bg-opacity-90">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Charity
        </Link>

        <ul className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
{/*             <li className="text-white hover:text-indigo-500">
                <Link to="/fund">Raise Fund</Link>
              </li> */}
              <li className="text-white hover:text-indigo-500">
                <Link to="/explore">Explore</Link>
              </li>
              
              <li className="text-white hover:text-indigo-500">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              
            </>
          ) : (
            <></>
          )}

          {isLoggedIn ? (
            <li>
              <button
                onClick={() => Auth.logout()}
                className="text-white hover:text-indigo-500 font-bold"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="text-white hover:text-indigo-500 font-bold"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
