import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import "./index.css";
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
            <div className="section-head">
              <h3>Personal Information</h3>
              <button>
                <Icon path={mdiChevronDown} size={1} />
                <Icon path={mdiChevronUp} size={1} />
              </button>
            </div>
            <GeneralInfo />
          </div>

          <div id="education-section">
            <div className="section-head">
              <h3>Education</h3>
              <button>
                <Icon path={mdiChevronDown} size={1} />
              </button>
            </div>
            <EducationInfo />
          </div>

          <div id="experience-section">
            <div className="section-head">
              <h3>Work Experience</h3>
              <button>
                <Icon path={mdiChevronDown} size={1} />
              </button>
            </div>
            <ExperienceInfo />
          </div>

          <div id="form-buttons">
            <button type="submit">Edit</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div id="document-pane">Document</div>
    </div>
  </StrictMode>
);
