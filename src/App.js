import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DoctorSchedule from "./pages/DoctorSchedule";
import PatientSignup from "./pages/PatientSignup";
import PatientDatabase from "./pages/PatientDatabase";
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/doctorSchedule" component={DoctorSchedule} />
        <Route path="/patientSignup" component={PatientSignup} />
        <Route path="/patientDatabase" component={PatientDatabase} />
        <Route path="/patientDetails" component={PatientDetails} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
