import { UserContext } from "../App";
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
    <div className="LogInBox">
      <h1>You Have Logged Out!</h1>
      <button onClick={logOutFuction}>Go to Home</button>
    </div>
  );
}

export default LogOut;
