import { NavLink } from "react-router-dom";

import Phone from "../components/Phone";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <Phone />
      <NavLink exact to="/doctorSchedule">
        <button>Who is on duty?</button>
      </NavLink>
      <NavLink exact to="/patientSignup">
        <button>I am a new patient</button>
      </NavLink>
    </div>
  );
};
export default HomePage;
