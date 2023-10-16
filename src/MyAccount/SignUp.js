import "./SignUp.css";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { state, dispatch } = useContext(UserContext);
  const values = { username: "", email: "", password: "" };

  const [inputs, setInputs] = useState(values);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  // const signUpFuction = (e) => {
  //   dispatch({ type: "USER", payload: true });
  //   window.alert("Successfully Signed Up!");
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "Username is required!";
    }
    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email!";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } else if (values.password.length < 6) {
      error.password = "Password must be more than 6 characters!";
    }
    console.log(errors);
    return error;
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="SignUpBox">
      {/* <pre>{JSON.stringify)input</pre> */}
      <form onSubmit={handleSubmit}>
        <div className="Header">
          <div className="Title">Sign Up</div>
          <div className="UnderLine"></div>
        </div>
        <div className="Form">
          <div className="Input">
            <img src="./user.svg" alt="icon"></img>
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
            <img src="./mail.svg" alt="icon"></img>
            <input
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
              onChange={handleChange}
              value={inputs.email}
            ></input>
          </div>
          <p>{errors.email}</p>
          <div className="Input">
            <img src="./password.svg" alt="icon"></img>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={inputs.password}
            ></input>
          </div>
          <p>{errors.password}</p>
          <div className="Login">
            Already have an account?{" "}
            <span onClick={navigateToLogin}>Click here to Log In</span>
          </div>
        </div>
        <div className="SubmitSection">
          <button className="Button" onClick={navigateToHome}>
            Home
          </button>
          <button className="Button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
