import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      {/* <div className="homepageImages"> */}
      <Link to="/Transplant">
        <img src="https://www.kidney.org/sites/default/files/styles/nephron_custom_scale_crop_300_225/public/transplant_friends.jpg" />
      </Link>

      <Link to="/Forum">
        <img src="https://www.codlearningtech.org/wp-content/uploads/2020/07/discussionboard-1.png" />
      </Link>

      <Link to="/Iga">
        <img src="http://cdn.shopify.com/s/files/1/0379/5923/7764/files/body-fail-kidney-man-organs-people-sad-7EtK4d-clipart_large.jpeg?v=1595044917" />
      </Link>
      {/* </div> */}
    </div>
  );
}
