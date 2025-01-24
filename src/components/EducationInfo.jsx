import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiSchool } from "@mdi/js";

function EducationInfoSection({ value = [], onUpdate }) {
  const [toggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled((prevToggled) => !prevToggled);
  }

  function handleAddButton() {
    const newSection = { id: Date.now(), data: {} };
    onUpdate([...value, newSection]);
  }

  function handleRemoveButton(id) {
    onUpdate(value.filter((section) => section.id !== id));
  }

  function handleFieldUpdate(id, field, fieldValue) {
    onUpdate(
      value.map((section) =>
        section.id === id
          ? { ...section, data: { ...section.data, [field]: fieldValue } }
          : section
      )
    );
  }

  return (
    <>
      <div className="section-head-I">
        <div className="section-head-II">
          <Icon path={mdiSchool} size={1} />
          <h3>Education</h3>
        </div>
        <button type="button" className="toggle-button" onClick={handleToggle}>
          <Icon path={toggled ? mdiChevronUp : mdiChevronDown} size={1} />
        </button>
      </div>
      {toggled && (
        <>
          {value.map((section) => (
            <EducationInfo
              key={section.id}
              id={section.id}
              data={section.data}
              onRemove={handleRemoveButton}
              onUpdate={handleFieldUpdate}
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

function EducationInfo({ id, data, onRemove, onUpdate }) {
  return (
    <div className="education">
      <label htmlFor={`school-${id}`}>
        School Name
        <input
          type="text"
          id={`school-${id}`}
          value={data.school || ""}
          onChange={(e) => onUpdate(id, "school", e.target.value)}
        />
      </label>

      <label htmlFor={`course-${id}`}>
        Course of Study
        <input
          type="text"
          id={`course-${id}`}
          value={data.course || ""}
          onChange={(e) => onUpdate(id, "course", e.target.value)}
        />
      </label>

      <label htmlFor={`details-${id}`}>
        Degree Details
        <textarea
          id={`details-${id}`}
          value={data.details || ""}
          onChange={(e) => onUpdate(id, "details", e.target.value)}
        />
      </label>

      <label htmlFor={`graduation-${id}`}>
        Graduation
        <input
          type="month"
          id={`graduation-${id}`}
          value={data.graduation || ""}
          onChange={(e) => onUpdate(id, "graduation", e.target.value)}
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

export default EducationInfoSection;
