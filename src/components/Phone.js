const Phone = () => {
  const time = new Date();
  const hour = time.getHours();
  return (
    <div>
      We are : <b>{hour > 7 && hour < 17 ? "open" : "closed"} </b>
      <p>To make an apointment call: 020 555 5555</p>
    </div>
  );
};
export default Phone;
