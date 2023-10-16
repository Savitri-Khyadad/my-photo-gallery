import React, { useContext, useState, useEffect } from "react";
import "./LogIn.css";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import user from "../assets/user.svg";
import password from "../assets/password.svg";

function LogIn() {
  const { state, dispatch } = useContext(UserContext);

  const values = { username: "", password: "" };

  const [inputs, setInputs] = useState(values);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  // const loginFuction = () => {
  //   dispatch({ type: "USER", payload: true });
  //   window.alert("Login Successful!");
  //   navigate("/gallery");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(inputs));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      // console.log(inputs);
      dispatch({ type: "USER", payload: true });
      navigate("/gallery");
    }
  }, [errors]);

  const validate = (values) => {
    const error = {};
    if (!values.username) {
      error.username = "Username is required!";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } else if (values.password.length < 6) {
      error.password = "Password must be more than 6 characters!";
    }

    return error;
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="LogInBox">
      <form onSubmit={handleSubmit}>
        <div className="Header">
          <div className="Title">Log In</div>
          <div className="UnderLine"></div>
        </div>
        <div className="Form">
          <div className="Input">
            <img src={user} alt="icon"></img>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={inputs.username}
            ></input>
          </div>
          <p>{errors.username}</p>
          <div className="Input">
            <img src={password} alt="icon"></img>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={inputs.password}
            ></input>
          </div>
          <p>{errors.password}</p>
        </div>
        <div className="Login">
          Forgot Password? <span>Click here</span>
        </div>
        <div className="SubmitSection">
          <button className="Button" onClick={navigateToHome}>
            Home
          </button>
          <button className="Button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
