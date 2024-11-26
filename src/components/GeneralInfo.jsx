import "../styles/GeneralInfo.css";

function GeneralInfo() {
  return (
    <div className="general">
      <label htmlFor="name">
        Name: <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        Email: <input type="email" id="email" />
      </label>
      <label htmlFor="phone">
        Phone: <input type="tel" id="phone" />
      </label>
    </div>
  );
}

export default GeneralInfo;
