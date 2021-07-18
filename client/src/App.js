import "./App.css";
import "./Transplant.css";
import "./Homepage.css";
import "./Homepage2.css";
import "./Iga.css";
import "./Navbar.css";
import "./Forum.css";
import "./Header.css";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Iga from "./components/Iga";
import Forum from "./components/Forum";
import Transplant from "./components/Transplant";
import Header from "./components/Header";
// import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";

import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Route exact path="/">
        {/* <Homepage /> */}
        {/* <Homepage /> */}
        <Homepage2 />
      </Route>
      <Route path="/transplant">
        <Transplant />
      </Route>
      <Route path="/iga">
        <Iga />
      </Route>
      <Route path="/forum">
        <Forum toggle={toggle} setToggle={setToggle} />
      </Route>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
