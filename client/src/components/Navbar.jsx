import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbarLinks">
      <Link to="/">
        <h1>Kidney App</h1>
      </Link>
      <Link to="/transplant">
        <h1>Transplant</h1>
      </Link>
      <Link to="/Forum">
        <h1>Forum</h1>
      </Link>
    </div>
  );
}
