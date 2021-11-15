import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand m-0">
          <Link href="/">
            <a className="text-light text-decoration-none">PokemonInfo</a>
          </Link>
        </h1>
        <ul className="nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link text-light">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link text-light">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
