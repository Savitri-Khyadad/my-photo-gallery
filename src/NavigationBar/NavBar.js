import "./NavBar.css";
import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="NavBar">
      <Link className="Logo" to="/">
        PHOTO GALLERY
      </Link>
      <div className="MenuBar">
        <button type="button" className="Button1" onClick={navigateToSignUp}>
          SIGN UP
        </button>
        <button type="button" className="Button2" onClick={navigateToLogin}>
          LOG IN
        </button>
        <button type="button" className="Button2" onClick={navigateToHome}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default NavBar;
