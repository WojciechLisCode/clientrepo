import "../styles/patientDatabase.css";

import axios from "axios";
import { useEffect, useState } from "react";

import PatientCard from "../components/PatientCard";

const PatientDatabase = () => {
  const [doctors, setDoctors] = useState({ status: "empty", data: [] });
  const [patients, setPatients] = useState({ status: "empty", data: [] });
  const [selectedDoctor, setSelectedDoctor] = useState("0");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [sortedFilteredPatients, setSortedFilteredPatients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      setDoctors({ status: "done", data: res });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      setPatients({ status: "done", data: res });
    }
    fetchData();
  }, []);

  useEffect(() => {
    function filteringPatients() {
      if (selectedDoctor === "0") {
        setFilteredPatients(patients.data.data);
      } else {
        setFilteredPatients(
          patients.data.data.filter((patient) => {
            return patient.doctorId === parseInt(selectedDoctor);
          })
        );
      }
    }
    filteringPatients();
  }, [patients.data.data, selectedDoctor]);

  useEffect(() => {
    function sortingPatients() {
      if (filteredPatients) {
        const tempArr = [...filteredPatients];
        tempArr.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
        setSortedFilteredPatients(tempArr);
      } else {
        return;
      }
    }
    sortingPatients();
  }, [filteredPatients]);
  return (
    <div patientDatabaseMain>
      <h1>Patients Database</h1>
      {doctors.status !== "empty" && patients.status !== "empty" ? (
        <div>
          <label>Doctor </label>
          <select
            onChange={(event) => setSelectedDoctor(event.target.value)}
            value={selectedDoctor}
          >
            <option value="0">all</option>
            {doctors.data.data.map((doctor) => {
              return (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.doctor}
                </option>
              );
            })}
          </select>
          <div className="patientsDatabaseResults">
            {sortedFilteredPatients.map((patient) => {
              return <PatientCard key={patient.id} patient={patient} />;
            })}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
export default PatientDatabase;
