import React, { useContext } from "react";
import "./LogIn.css";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const { state, dispatch } = useContext(UserContext);

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginFuction = () => {
    dispatch({ type: "USER", payload: true });
    window.alert("Login Successful!");
    navigate("/gallery");
  };

  return (
    <div className="LogInBox">
      <div className="Header">
        <div className="Title">Log In</div>
        <div className="UnderLine"></div>
      </div>
      <div className="Form">
        <div className="Input">
          <img src="./user.svg" alt="icon"></img>
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="Input">
          <img src="./password.svg" alt="icon"></img>
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
      <div className="Login">
        Forgot Password? <span>Click here</span>
      </div>
      <div className="SubmitSection">
        <button className="Button">Home</button>
        <button className="Button" onClick={loginFuction}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LogIn;
