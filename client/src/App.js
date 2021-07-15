import "./App.css";
import "./Transplant.css";
import "./Homepage.css";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Iga from "./components/Iga";
import Forum from "./components/Forum";
import Transplant from "./components/Transplant";
// import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <Route exact path="/">
        {/* <Homepage /> */}
        <Homepage2 />
      </Route>
      <Route path="/Transplant">
        <Transplant />
      </Route>
      <Route path="/Iga">
        <Iga />
      </Route>
      <Route path="/Forum">
        <Forum toggle={toggle} setToggle={setToggle} />
      </Route>
      {/* <Route>
        <Cards />
      </Route> */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
