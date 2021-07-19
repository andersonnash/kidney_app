import { Link } from "react-router-dom";
import React from "react";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(true);
  const [visible, setVisible] = useState(true);
  const [windowDimension, setWindowDimension] = useState(null);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = (e) => {
      if (window.innerWidth > 425) {
        setHamburger(true);
        setVisible(true);
      } else if (window.innerWidth <= 425) {
        setHamburger(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = window.innerWidth <= 700;

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <nav>

      <h2 className="headingLogo">Forza Salute</h2>
      {isMobile ? (
        <div className="mobileClass">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        className="bars"
        alt="hamburger"
        onClick={() => setHamburger(!hamburger)}
      />
      <div
        className="nav-items"
        style={{ display: hamburger && visible ? "flex" : "none" }}
      >
        <a href="https://facebook.com/">Facebook</a>
        <a href="https://twitter.com/">Twitter</a>
        <a href="https://stackoverflow.com">Stack Overflow</a>
          </div>
          </div>
      ) : (
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
      )
    </nav>

    // <div className="navbar">
    //   <Button
    //     aria-controls="simple-menu"
    //     aria-haspopup="true"
    //     onClick={handleClick}
    //   >
    //     Open Menu
    //   </Button>
    //   <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <Link to="/">
    //       <MenuItem onClick={handleClose}>Homepage</MenuItem>
    //     </Link>
    //     <Link to="/forum">
    //       <MenuItem onClick={handleClose}>Forum</MenuItem>
    //     </Link>
    //     <Link to="/transplant">
    //       <MenuItem onClick={handleClose}>Transplant</MenuItem>
    //     </Link>
    //     <Link to="/iga">
    //       <MenuItem onClick={handleClose}>Living with IgA</MenuItem>
    //     </Link>
    //   </Menu>
    // </div>
  );
}
