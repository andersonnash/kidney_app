import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <div className="homepageLinks">
        <Link to="/Transplant">Transplant</Link>

        <Link to="/Forum">Forum</Link>

        <Link to="/Iga">Living with Iga Nephropathy</Link>
      </div>
    </div>
  );
}
