import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo">PHOTO GALLERY</div>
      <div className="MenuBar">
        <button type="button" className="Button1">
          SIGN UP
        </button>
        <button type="button" className="Button2">
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default NavBar;
