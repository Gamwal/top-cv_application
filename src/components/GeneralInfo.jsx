import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiAccount } from "@mdi/js";

function PersonalInfoSection({ value = [], onUpdate }) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled((prevToggled) => !prevToggled);
  }

  function handleUpdate(field, value) {
    onUpdate((prevData) => ({ ...prevData, [field]: value }));
  }

  return (
    <>
      <div className="section-head-I">
        <div className="section-head-II">
          <Icon path={mdiAccount} size={1} />
          <h3>Personal Information</h3>
        </div>
        <button type="button" className="toggle-button" onClick={handleClick}>
          <Icon path={toggled ? mdiChevronUp : mdiChevronDown} size={1} />
        </button>
      </div>
      {toggled && <GeneralInfo data={value} onUpdate={handleUpdate} />}
    </>
  );
}

function GeneralInfo({ data, onUpdate }) {
  return (
    <div className="general">
      <label htmlFor="firstName">
        First Name{" "}
        <input
          type="text"
          id="firstName"
          value={data.firstName || ""}
          onChange={(e) => onUpdate("firstName", e.target.value)}
        />
      </label>

      <label htmlFor="lastName">
        Last Name{" "}
        <input
          type="text"
          id="lastName"
          value={data.lastName || ""}
          onChange={(e) => onUpdate("lastName", e.target.value)}
        />
      </label>

      <label htmlFor="email">
        Email Address{" "}
        <input
          type="email"
          id="email"
          value={data.email || ""}
          onChange={(e) => onUpdate("email", e.target.value)}
        />
      </label>

      <label htmlFor="phone">
        Phone Number{" "}
        <input
          type="tel"
          id="phone"
          value={data.phone || ""}
          onChange={(e) => onUpdate("phone", e.target.value)}
        />
      </label>

      <label htmlFor="role">
        Description{" "}
        <input
          type="text"
          id="role"
          value={data.role || ""}
          onChange={(e) => onUpdate("role", e.target.value)}
        />
      </label>

      <label htmlFor="linkedin">
        LinkedIn Profile{" "}
        <input
          type="text"
          id="linkedin"
          value={data.linkedin || ""}
          onChange={(e) => onUpdate("linkedin", e.target.value)}
        />
      </label>
    </div>
  );
}

export default PersonalInfoSection;
