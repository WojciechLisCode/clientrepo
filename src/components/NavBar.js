import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/doctorSchedule">Docotor Schedule</NavLink>
      <NavLink to="/patientSignup">Patient Signup</NavLink>
      <NavLink to="/patientDatabase">Patient Database</NavLink>
    </div>
  );
};
export default NavBar;
