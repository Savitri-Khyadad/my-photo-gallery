import "./NavBar.css";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

function NavBar() {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToLogout = () => {
    navigate("/logout");
  };

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <button type="button" className="Button2" onClick={navigateToLogout}>
            LOGOUT
          </button>
        </>
      );
    } else {
      return (
        <>
          <button type="button" className="Button1" onClick={navigateToSignUp}>
            SIGN UP
          </button>
          <button type="button" className="Button2" onClick={navigateToLogin}>
            LOG IN
          </button>
        </>
      );
    }
  };

  return (
    <div className="NavBar">
      <Link className="Logo" to="/">
        PHOTO GALLERY
      </Link>
      <div className="MenuBar">
        <RenderMenu />
      </div>
    </div>
  );
}

export default NavBar;
