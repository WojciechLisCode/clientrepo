import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbarMain">
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/doctorSchedule"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        Docotor Schedule
      </NavLink>
      <NavLink
        exact
        to="/patientSignup"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        Patient Signup
      </NavLink>
      <NavLink
        exact
        to="/patientDatabase"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        Patient Database
      </NavLink>
    </div>
  );
};
export default NavBar;
