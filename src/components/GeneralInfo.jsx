// import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  // const [state, setState] = useState(0);
  return (
    <div className="general">
      <label htmlFor="name">
        Full Name <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        Email Address <input type="email" id="email" />
      </label>
      <label htmlFor="phone">
        Phone Number <input type="tel" id="phone" />
      </label>
    </div>
  );
}

export default GeneralInfo;
