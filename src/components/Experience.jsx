import "../styles/ExperienceInfo.css";

function ExperienceInfo() {
  return (
    <div className="experience">
      <label htmlFor="company">
        Company Name: <input type="text" id="company" />
      </label>
      <label htmlFor="position">
        Position Title: <input type="text" id="position" />
      </label>
      <label htmlFor="duties">
        Main Responsibilities: <input type="textarea" id="duties" />
      </label>
      <label htmlFor="start-date">
        Start Date: <input type="text" id="start-date" />
      </label>
      <label htmlFor="end-date">
        End Date: <input type="text" id="end-date" />
      </label>
    </div>
  );
}

export default ExperienceInfo;
