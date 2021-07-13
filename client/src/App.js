import "./App.css";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Iga from "./components/Iga";
import Forum from "./components/Forum";
import Transplant from "./components/Transplant";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/Transplant">
        <Transplant />
      </Route>
      <Route path="/Iga">
        <Iga />
      </Route>
      <Route path="/Forum">
        <Forum />
      </Route>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
