import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/doctorSchedule"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Docotor Schedule
      </NavLink>
      <NavLink
        exact
        to="/patientSignup"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Patient Signup
      </NavLink>
      <NavLink
        exact
        to="/patientDatabase"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Patient Database
      </NavLink>
    </div>
  );
};
export default NavBar;
