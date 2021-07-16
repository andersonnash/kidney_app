import { Link } from "react-router-dom";
import React from "react";
import Button from "@material-ui/core/Button";

// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

export default function Navbar() {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className="topnav">
      <Link to="/">Homepage</Link>

      <Link to="/transplant">Transplant</Link>

      <Link to="/forum">Forum</Link>

      <Link to="/iga">Living with Iga</Link>
    </div>

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
