import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PersonalInfoSection from "./components/GeneralInfo";
import EducationInfoSection from "./components/EducationInfo";
import ExperienceInfoSection from "./components/Experience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>CV Builder</h1>
    <div id="main">
      <div id="input-pane">
        <form action="">
          <div id="general-section">
            <PersonalInfoSection />
          </div>

          <div id="education-section">
            <EducationInfoSection />
          </div>

          <div id="experience-section">
            <ExperienceInfoSection />
          </div>

          <div id="form-buttons">
            <button type="button">Edit</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <div id="document-pane"></div>
      </div>
    </div>
  </StrictMode>
);
