const Phone = () => {
  const time = new Date();
  const hour = time.getHours();
  return (
    <div>
      <p className="openState">
        We are : <b>{hour > 7 && hour < 17 ? "open" : "closed"} </b>
      </p>
      <p>
        To make an apointment call: <b>020 555 5555</b>
      </p>
    </div>
  );
};
export default Phone;
