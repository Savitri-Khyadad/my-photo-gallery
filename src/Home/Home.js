import "./Home.css";
import "../NavigationBar/NavBar";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Home() {
  return (
    <div className="Home">
      <div className="Main">
        <div className="One">
          <h1>Photo Gallery</h1>
          <h3>A place for all your photos!</h3>
          <button type="button" className="Button-01">
            Contact Us
          </button>
        </div>
        {/* <div className="Two"></div> */}
        <footer className="Footer">
          <div className="FlexFooter">
            <div className="Link1">
              <a
                href="https://www.linkedin.com/in/savitri-khyadad/"
                target="./dummy"
              >
                <img src={linkedin} alt="icon1" />
              </a>
            </div>
            <div className="Link2">
              <a href="https://github.com/Savitri-Khyadad" target="./dummy">
                <img src={github} alt="icon2" />
              </a>
            </div>
            <div className="Link3">
              <a href="https://www.instagram.com/" target="./dummy">
                <img src={instagram} alt="icon" />
              </a>
            </div>
            <div className="Link3">
              <a href="https://www.twitter.com/" target="./dummy">
                <img src={twitter} alt="icon" />
              </a>
            </div>
            <div className="Link3">
              <a href="https://www.gmail.com/" target="./dummy">
                <img src={mail} alt="icon" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
