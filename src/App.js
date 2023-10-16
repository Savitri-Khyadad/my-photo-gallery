import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./NavigationBar/NavBar";
import Home from "./Home/Home.js";
import LogIn from "./MyAccount/LogIn";
import SignUp from "./MyAccount/SignUp";
import Gallery from "./Gallery/Gallery";
import LogOut from "./MyAccount/LogOut";
import { useReducer, createContext } from "react";
import { initialState, reducer } from "./reducer/UserReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/logout" element={<LogOut />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <div className="App">
            <NavBar></NavBar>
            <Routing />
          </div>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
