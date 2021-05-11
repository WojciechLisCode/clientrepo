import "../styles/patientSignup.css";

import { useState } from "react";

const PatientSignup = () => {
  const [submit, setSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  submit &&
    console.log(`
  First name: ${firstName},
  Last name: ${lastName},
  Email: ${email},
  Phone number: ${phoneNumber},
  Gender: ${gender}
  Date of birth: ${dateOfBirth}`);

  return (
    <div className="patientSignupMain">
      <h1>Patient Signup</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmit(true);
        }}
      >
        <p className="inputLine">
          <label>First name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </p>
        <p className="inputLine">
          <label>Last name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </p>
        <p className="inputLine">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </p>
        <p className="inputLine">
          <label>Phone: </label>
          <input
            type="number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </p>
        <p className="inputLine">
          <label>Gender: </label>
          <select
            onChange={(event) => setGender(event.target.value)}
            value={gender}
          >
            <option value="" defaultValue disabled hidden>
              Select
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </p>
        <p className="inputLine">
          <label>Date of birth: </label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
      {submit && <h3>Form Submited!!</h3>}
    </div>
  );
};
export default PatientSignup;
