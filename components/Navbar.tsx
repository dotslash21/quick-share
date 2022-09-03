import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 sm:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-3xl text-primary font-bold">
                Quick
                <span className="text-base-content">Share</span>
              </a>
            </div>
          </a>
        </div>
        <div className="navbar-end"></div>
      </div>
      <div className="navbar bg-base-100 hidden sm:flex">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl text-primary font-bold">
            Quick
            <span className="text-base-content">Share</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
