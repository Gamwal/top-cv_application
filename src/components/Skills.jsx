import "../styles/EducationInfo.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiPaletteSwatch } from "@mdi/js";

function SkillInfoSection({ value = [], onUpdate }) {
  const [toggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled((prevToggled) => !prevToggled);
  }

  function handleAddButton() {
    const newSkill = { id: Date.now(), data: {} };
    onUpdate([...value, newSkill]);
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
          <Icon path={mdiPaletteSwatch} size={1} />
          <h3>Skills</h3>
        </div>
        <button type="button" className="toggle-button" onClick={handleToggle}>
          <Icon path={toggled ? mdiChevronUp : mdiChevronDown} size={1} />
        </button>
      </div>
      {toggled && (
        <>
          {value.map((section) => (
            <SkillInfo
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

function SkillInfo({ id, data, onRemove, onUpdate }) {
  return (
    <div className="skill">
      <label htmlFor={`skill-${id}`}>
        Skill
        <input
          type="text"
          id={`skill-${id}`}
          value={data.skill || ""}
          onChange={(e) => onUpdate(id, "skill", e.target.value)}
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

export default SkillInfoSection;
