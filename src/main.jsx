import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";
import "./index.css";
import PersonalInfoSection from "./components/GeneralInfo";
import EducationInfoSection from "./components/EducationInfo";
import ExperienceInfoSection from "./components/Experience";
import ProjectInfoSection from "./components/Projects";
import SkillInfoSection from "./components/Skills";
import AchievementInfoSection from "./components/Achievements";
import MyDocument from "./components/PdfRenderer";

function CVBuilder() {
  const [personalData, setPersonalData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [achievementData, setAchievementData] = useState([]);

  const [documentData, setDocumentData] = useState({
    personalData,
    experienceData,
    educationData,
    projectData,
    skillData,
    achievementData,
  });

  function handleUpdate() {
    console.log(achievementData);
    setDocumentData({
      personalData,
      experienceData,
      educationData,
      projectData,
      skillData,
      achievementData,
    });
  }

  function handleDownload() {}

  return (
    <StrictMode>
      <h1>CV Builder</h1>
      <div id="main">
        <div id="input-pane">
          <form action="">
            <div id="general-section">
              <PersonalInfoSection
                value={personalData}
                onUpdate={setPersonalData}
              />
            </div>

            <div id="experience-section">
              <ExperienceInfoSection
                value={experienceData}
                onUpdate={setExperienceData}
              />
            </div>

            <div id="education-section">
              <EducationInfoSection
                value={educationData}
                onUpdate={setEducationData}
              />
            </div>

            <div id="project-section">
              <ProjectInfoSection
                value={projectData}
                onUpdate={setProjectData}
              />
            </div>

            <div id="skill-section">
              <SkillInfoSection value={skillData} onUpdate={setSkillData} />
            </div>

            <div id="achievement-section">
              <AchievementInfoSection
                value={achievementData}
                onUpdate={setAchievementData}
              />
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
        <div id="document-pane">
          <PDFViewer width="100%" height="100%" border="none" overflow="none">
            <MyDocument data={documentData} />
          </PDFViewer>
        </div>
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<CVBuilder />);
