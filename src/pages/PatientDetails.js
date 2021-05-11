import "../styles/PatientDetails.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PatientDetails = () => {
  const params = useParams();
  const [patient, setPatient] = useState({ status: "empty", data: [] });

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${params.id}`
      );
      setPatient({ status: "done", data: res });
    }
    fetchData();
  }, [params.id]);

  if (patient.status === "done") {
    const {
      firstName,
      lastName,
      id,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      prescriptions,
    } = patient.data.data;
    return (
      <div className="patientDetailsMain">
        <p>
          Name:{"  "}
          <b>
            {firstName} {lastName}
          </b>
        </p>
        <p>
          Id: <b>{id}</b>
        </p>
        <p>
          Date of birth: <b>{dateOfBirth}</b>
        </p>
        <p>
          Gender: <b>{gender}</b>
        </p>
        <div>
          Contact details:{" "}
          <p>
            Email: <b>{email}</b>
          </p>
          <p>
            Phone Number: <b>{phoneNumber}</b>
          </p>
        </div>
        <div>
          Prescriptions:
          <p>
            {prescriptions.map((prescription, i) => {
              return (
                <p key={i}>
                  <b>{prescription},</b>{" "}
                </p>
              );
            })}
          </p>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};
export default PatientDetails;
