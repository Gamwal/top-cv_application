import "../styles/ExperienceInfo.css";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiBriefcase } from "@mdi/js";
import { useState } from "react";

let nextId = 1;

function ExperienceInfoSection() {
  const [toggled, setToggled] = useState(false);
  const [sections, setSections] = useState([{ id: 1, data: {} }]);

  function handleToggle() {
    setToggled((prevToggled) => !prevToggled);
  }

  function handleAddButton() {
    setSections((prevSections) => [
      ...prevSections,
      { id: nextId++, data: {} },
    ]);
  }

  function handleRemoveButton(id) {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  }

  function handleUpdate(id, field, value) {
    setSections(
      (prevSections) =>
        (prevSections = prevSections.map((section) =>
          section.id === id
            ? { ...section, data: { ...section.data, [field]: value } }
            : section
        ))
    );
  }

  return (
    <>
      <div className="section-head-I">
        <div className="section-head-II">
          <Icon path={mdiBriefcase} size={1} />
          <h3>Work Experience</h3>
        </div>
        <button type="button" className="toggle-button" onClick={handleToggle}>
          <Icon path={toggled ? mdiChevronUp : mdiChevronDown} size={1} />
        </button>
      </div>
      {toggled && (
        <>
          {sections.map((section) => (
            <ExperienceInfo
              key={section.id}
              id={section.id}
              data={section.data}
              onRemove={handleRemoveButton}
              onUpdate={handleUpdate}
            />
          ))}
          <button
            type="button"
            className="add-button"
            onClick={handleAddButton}
          >
            Add
          </button>
        </>
      )}
    </>
  );
}

function ExperienceInfo({ id, data, onRemove, onUpdate }) {
  return (
    <div className="experience">
      <label htmlFor={`company-${id}`}>
        Company Name
        <input
          type="text"
          id={`company-${id}`}
          value={data.company || ""}
          onChange={(e) => onUpdate(id, "company", e.target.value)}
        />
      </label>
      <label htmlFor={`position-${id}`}>
        Position Title
        <input
          type="text"
          id={`position-${id}`}
          value={data.position || ""}
          onChange={(e) => onUpdate(id, "position", e.target.value)}
        />
      </label>
      <label htmlFor={`duties-${id}`}>
        Responsibilities:
        <textarea
          id={`duties-${id}`}
          value={data.duties || ""}
          onChange={(e) => onUpdate(id, "duties", e.target.value)}
        />
      </label>
      <label htmlFor={`start-date-${id}`}>
        Start Date{" "}
        <input
          type="date"
          id={`start-date-${id}`}
          value={data["start-date"] || ""}
          onChange={(e) => onUpdate(id, "start-date", e.target.value)}
        />
      </label>
      <label htmlFor={`end-date-${id}`}>
        End Date
        <input
          type="date"
          id={`end-date-${id}`}
          value={data["end-date"] || ""}
          onChange={(e) => onUpdate(id, "end-date", e.target.value)}
        />
      </label>
      <button
        type="button"
        className="remove-button"
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </div>
  );
}

export default ExperienceInfoSection;
