import "./Home.css";
import "../NavigationBar/NavBar";
import NavBar from "../NavigationBar/NavBar";

function Home() {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <div className="Main">
        <div className="One">
          {/* <img src="./photo-gallery.jpg" alt="Something"></img> */}
          <h1>Photo Gallery</h1>
          <h3>A place for all your photos!</h3>
          <button type="button" className="Button-01">
            Contact Us
          </button>
        </div>
        <div className="Two">
          {/* <img src="./movingImage3.jpg" alt="image1"></img> */}
          {/* <img src="./movingImage1.jpg" alt="image1"></img>
          <img src="./movingImage2.jpg" alt="image1"></img>

          <img src="./movingImage4.jpg" alt="image1"></img> */}
        </div>
      </div>
      <footer className="Footer">
        <div className="FlexFooter">
          <div className="Link1">
            <a
              href="https://www.linkedin.com/in/savitri-khyadad/"
              target="./dummy"
            >
              <img src="./linkedin.svg" alt="icon1" />
            </a>
          </div>
          <div className="Link2">
            <a href="https://github.com/Savitri-Khyadad" target="./dummy">
              <img src="./github.svg" alt="icon2" />
            </a>
          </div>
          <div className="Link3">
            <a href="https://www.instagram.com/" target="./dummy">
              <img src="./instagram.svg" alt="icon" />
            </a>
          </div>
          <div className="Link3">
            <a href="https://www.twitter.com/" target="./dummy">
              <img src="./twitter.svg" alt="icon" />
            </a>
          </div>
          <div className="Link3">
            <a href="https://www.gmail.com/" target="./dummy">
              <img src="./mail.svg" alt="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
