import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiViewList } from "@mdi/js";

function ProjectInfoSection({ value = [], onUpdate }) {
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
          <Icon path={mdiViewList} size={1} />
          <h3>Projects</h3>
        </div>
        <button type="button" className="toggle-button" onClick={handleToggle}>
          <Icon path={toggled ? mdiChevronUp : mdiChevronDown} size={1} />
        </button>
      </div>
      {toggled && (
        <>
          {value.map((section) => (
            <ProjectInfo
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

function ProjectInfo({ id, data, onRemove, onUpdate }) {
  return (
    <div className="project">
      <label htmlFor={`name-${id}`}>
        Project Name
        <input
          type="text"
          id={`name-${id}`}
          value={data.name || ""}
          onChange={(e) => onUpdate(id, "name", e.target.value)}
        />
      </label>

      <label htmlFor={`deatils-${id}`}>
        Details:
        <textarea
          id={`details-${id}`}
          value={data.details || ""}
          onChange={(e) => onUpdate(id, "details", e.target.value)}
        />
      </label>

      <label htmlFor={`completed-${id}`}>
        Date of Completion
        <input
          type="month"
          id={`completion-${id}`}
          value={data.completion || ""}
          onChange={(e) => onUpdate(id, "completion", e.target.value)}
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

export default ProjectInfoSection;
