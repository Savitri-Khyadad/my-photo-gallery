import "./SignUp.css";

function SignUp() {
  return (
    <div className="SignUpBox">
      <div className="Header">
        <div className="Title">Sign In</div>
        <div className="UnderLine"></div>
      </div>
      <div className="Form">
        <div className="Input">
          <img src="./user.svg" alt="icon"></img>
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="Input">
          <img src="./mail.svg" alt="icon"></img>
          <input type="email" placeholder="xyz@gmail.com"></input>
        </div>
        <div className="Input">
          <img src="./password.svg" alt="icon"></img>
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="Login">
          Already have an account? <span>Click here to Log In</span>
        </div>
      </div>
      <div className="SubmitSection">
        <button className="Button">Home</button>
        <button className="Button">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
