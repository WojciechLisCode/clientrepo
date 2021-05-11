import "../styles/PatientCard.css";

import { NavLink } from "react-router-dom";

const PatientCard = (props) => {
  const { firstName, lastName, id, dateOfBirth } = props.patient;

  return (
    <div className="patientCardMain">
      <p>
        Name: {firstName} {lastName}
      </p>
      <p>Id: {id}</p>
      <p>Date of birth: {dateOfBirth}</p>
      <NavLink to={`/patientDetails/${id}`}>
        <button>Show details</button>
      </NavLink>
    </div>
  );
};
export default PatientCard;
