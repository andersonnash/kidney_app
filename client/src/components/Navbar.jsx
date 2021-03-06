import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = (e) => {
      setWindowDimension(window.innerWidth);
      // if (windowDimension <= 700) {
      //   setHamburger(true);
      //   setVisible(true);
      // } else {
      //   setHamburger(false);
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const isMobile = windowDimension <= 700;

  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  return (
    <nav>
      <Link to="/homepage">
        <h2 className="headingLogo">In Forma</h2>
      </Link>
      {isMobile ? (
        <div className="mobileClass">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            className="bars"
            alt="hamburger"
            onClick={handleClick}
          />
          <div
            className="nav-items"
            style={{ display: hamburger && visible ? "flex" : "none" }}
          >
            <Link to="/transplant">Transplant</Link>
            <Link to="/homepage">Homepage</Link>
            <Link to="/forum">Forum</Link>
            <Link to="/iga">Living with IgA</Link>
            <a href="https://kidney.org">National Kidney Foundation</a>
          </div>
        </div>
      ) : (
        <div className="desktopClass">
          <div className="topnav">
            <div className="logo">
              <div className="menu">
                <button>
                  <Link to="/">Homepage</Link>
                </button>
                <button>
                  <Link to="/transplant">Transplant</Link>
                </button>
                <button>
                  <Link to="/forum">Forum</Link>
                </button>
                <button>
                  <Link to="/iga">Living with Iga</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
