import React from "react";

function Nav() {

  return (
    <nav className="navbar  d-flex justify-content-between bg-dark">
      <a className="navbar-brand" href="/Saved">
        Saved Books
      </a>

      <a className="navbar-brand" href="/Search">
        Search Books
      </a>

      <a className="navbar-brand" href="/">
        HomePage      
        </a>
    </nav>


  );
}

export default Nav;
