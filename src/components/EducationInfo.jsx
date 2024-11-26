import "../styles/EducationInfo.css";

function EducationInfo() {
  return (
    <div className="education">
      <label htmlFor="school">
        School Name: <input type="text" id="school" />
      </label>
      <label htmlFor="course">
        Course of Study: <input type="text" id="course" />
      </label>
      <label htmlFor="degree">
        Degree Type (B.Sc., PhD., OND, HND, etc.):{" "}
        <input type="text" id="degree" />
      </label>
      <label htmlFor="graduation">
        Year of Graduation: <input type="text" id="graduation" />
      </label>
    </div>
  );
}

export default EducationInfo;
