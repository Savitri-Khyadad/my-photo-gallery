import { UserContext } from "../App";
import "./LogOut.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const logOutFuction = () => {
    dispatch({ type: "USER", payload: false });
    navigate("/");
  };

  return (
    <div className="LogOutBox">
      <div className="Header">
        <div className="Title">You Have Logged Out!</div>
      </div>
      <button className="Button" onClick={logOutFuction}>
        Go to Home
      </button>
    </div>
  );
}

export default LogOut;
