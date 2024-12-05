import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PersonalInfoSection from "./components/GeneralInfo";
import EducationInfoSection from "./components/EducationInfo";
import ExperienceInfoSection from "./components/Experience";

function handleUpdate() {}

function handleDownload() {}

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
            <button
              type="button"
              className="update-button"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              type="button"
              className="download-button"
              onClick={handleDownload}
            >
              Download
            </button>
          </div>
        </form>
      </div>
      <div>
        <div id="document-pane">
          <div id="personal-info"></div>
          <div id="experience-info"></div>
          <div id="education-info"></div>
        </div>
      </div>
    </div>
  </StrictMode>
);
