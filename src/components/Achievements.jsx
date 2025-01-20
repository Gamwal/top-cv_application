import "../styles/EducationInfo.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiTrophyAward } from "@mdi/js";

function AchievementInfoSection({ value = [], onUpdate }) {
  const [toggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled((prevToggled) => !prevToggled);
  }

  function handleAddButton() {
    const newProject = { id: Date.now(), data: {} };
    onUpdate([...value, newProject]);
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
          <Icon path={mdiTrophyAward} size={1} />
          <h3>Achievements</h3>
        </div>
        <button type="button" className="toggle-button" onClick={handleToggle}>
          <Icon path={toggled ? mdiChevronUp : mdiChevronDown} size={1} />
        </button>
      </div>
      {toggled && (
        <>
          {value.map((section) => (
            <AchievementInfo
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

function AchievementInfo({ id, data, onRemove, onUpdate }) {
  return (
    <div className="education">
      <label htmlFor={`school-${id}`}>
        Project Name
        <input
          type="text"
          id={`name-${id}`}
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
      <label htmlFor={`degree-${id}`}>
        Degree Type
        <input
          type="text"
          id={`degree-${id}`}
          value={data.degree || ""}
          onChange={(e) => onUpdate(id, "degree", e.target.value)}
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

export default AchievementInfoSection;
