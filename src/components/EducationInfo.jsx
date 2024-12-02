import "../styles/EducationInfo.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiSchool } from "@mdi/js";

let nextId = 1;

function EducationInfoSection() {
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
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id
          ? { ...section, data: { ...section.data, [field]: value } }
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
          {sections.map((section) => (
            <EducationInfo
              key={section.id}
              id={section.id}
              data={section.data}
              onRemove={handleRemoveButton}
              onUpdate={handleUpdate}
            />
          ))}
          <button type="button" onClick={handleAddButton}>
            ADD
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
          value={data.school}
          onChange={(e) => onUpdate(id, "school", e.target.value)}
        />
      </label>
      <label htmlFor={`course-${id}`}>
        Course of Study
        <input
          type="text"
          id={`course-${id}`}
          value={data.course}
          onChange={(e) => onUpdate(id, "course", e.target.value)}
        />
      </label>
      <label htmlFor={`degree-${id}`}>
        Degree Type
        <input
          type="text"
          id={`degree-${id}`}
          value={data.degree}
          onChange={(e) => onUpdate(id, "degree", e.target.value)}
        />
      </label>
      <label htmlFor={`graduation-${id}`}>
        Graduation
        <input
          type="month"
          id={`graduation-${id}`}
          value={data.graduation}
          onChange={(e) => onUpdate(id, "graduation", e.target.value)}
        />
      </label>
      <button type="button" onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
}

export default EducationInfoSection;
