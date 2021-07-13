import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h3>Hello</h3>

      <section>
        <Link to="/Transplant">Transplant</Link>
      </section>
      <section>
        <Link to="/Forum">Forum</Link>
      </section>
      <section>
        <Link to="/Iga">Living with Iga Nephropathy</Link>
      </section>
    </div>
  );
}
