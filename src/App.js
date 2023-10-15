import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./NavigationBar/NavBar";
import Home from "./Home/Home.js";
import LogIn from "./MyAccount/LogIn";
import SignUp from "./MyAccount/SignUp";
import Gallery from "./Gallery/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Routes></Routes> */}
      </div>
    </Router>
  );
}

export default App;
