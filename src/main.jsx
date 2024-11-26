import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/Experience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>CV Application</h1>
    <form action="">
      <div>
        <h2>General Information</h2>
        <GeneralInfo />
      </div>
      <div>
        <h2>Education</h2>
        <EducationInfo />
      </div>
      <div>
        <h2>Work Experience</h2>
        <ExperienceInfo />
      </div>
      <button type="submit">Edit</button>
      <button type="submit">Submit</button>
    </form>
  </StrictMode>
);
