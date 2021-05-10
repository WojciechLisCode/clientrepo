import axios from "axios";
import { useEffect, useState } from "react";

import Phone from "../components/Phone";

const DoctorSchedule = () => {
  const [doctors, setDoctors] = useState({ status: "empty", data: [] });

  useEffect(() => {
    async function fetchDoctorsData() {
      const res = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      setDoctors({ status: "done", data: res });
    }
    fetchDoctorsData();
  }, []);

  return (
    <div>
      <h1>Who is on duty ?</h1>
      {doctors.status === "empty" ? (
        "loading"
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Doctor</th>
              <th>availability</th>
            </tr>
            {doctors.data.data.map((doctor) => {
              return (
                <tr key={doctor.id}>
                  <td>{doctor.doctor}</td>
                  <td>{doctor.onDuty ? "on duty" : "off duty"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Phone />
    </div>
  );
};
export default DoctorSchedule;
