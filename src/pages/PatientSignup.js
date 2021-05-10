const PatientSignup = () => {
  return (
    <div>
      <h1>Patient Signup</h1>
      <form>
        <p>
          <label>first name</label>
          <input type="text" />
        </p>
        <p>
          <label>last name</label>
          <input type="text" />
        </p>
        <p>
          <label>email</label>
          <input type="email" />
        </p>
        <p>
          <label>phone</label>
          <input type="number" />
        </p>
        <p>
          <label>gender</label>
          <input type="text" />
        </p>
        <p>
          <label>date of birth</label>
          <input type="date" />
        </p>
      </form>
    </div>
  );
};
export default PatientSignup;
