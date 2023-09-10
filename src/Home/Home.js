import "./Home.css";

function Home() {
  return (
    <div className="Home">
      {/* <div className="Vector"></div> */}
      <div className="Nav">
        <div className="Logo">PG</div>
        <div className="HomeNav">HOME</div>
        <div className="HomeSignIn">SIGN IN</div>
        <div className="HomeAboutUs">ABOUT US</div>
      </div>

      <div className="MainBox">
        <div className="PhotoGallery">Photo Gallery</div>
        <div className="ListBox">
          <div className="List">
            <div className="Tick"></div>
            <div className="ListContent">Create Account</div>
          </div>
          <div className="List">
            <div className="Tick"></div>
            <div className="ListContent">Add Photos</div>
          </div>
          <div className="List">
            <div className="Tick"></div>
            <div className="ListContent">Free</div>
          </div>
        </div>
        <div className="LandingImage"></div>
      </div>

      <div className="Footer">
        <div className="LinkedInBox">
          <div className="LinkedInLogo">Linkedin</div>
        </div>
      </div>
      <div className="Elipse"></div>
      <div className="Elipse1"></div>
    </div>
  );
}

export default Home;
