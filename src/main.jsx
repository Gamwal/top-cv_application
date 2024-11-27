import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/sharedStyles.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/Experience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>CV Builder</h1>
    <div id="main">
      <div id="input-pane">
        <form action="">
          <div id="general-section">
            <h2>Personal Information</h2>
            <GeneralInfo />
          </div>
          <div id="education-section">
            <h2>Education</h2>
            <EducationInfo />
          </div>
          <div id="experience-section">
            <h2>Work Experience</h2>
            <ExperienceInfo />
          </div>
          <div>
            <button type="submit">Edit</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div id="document-pane">Document</div>
    </div>
  </StrictMode>
);
