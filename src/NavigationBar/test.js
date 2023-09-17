import "./NavBar.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LogIn from "../MyAccount/LogIn";

function NavBar() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  // const navigateToHome = () => {
  //   navigate("/");
  // };

  return (
    <div className="NavBar">
      <div className="Logo">PHOTO GALLERY</div>
      <div className="MenuBar">
        <button type="button" className="Button1" onClick={navigateToSignUp}>
          SIGN UP
        </button>
        <button type="button" className="Button2" onClick={navigateToLogin}>
          LOG IN
        </button>

        <Routes>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/path" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBar;
