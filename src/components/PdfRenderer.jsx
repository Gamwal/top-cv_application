import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    flexDirection: "column",
    padding: 20,
  },
  heading: {
    alignItems: "center",
    fontSize: 12,
  },
  section: {
    margin: 10,
    fontSize: 12,
  },
  name: {
    fontSize: 20,
  },
});

// Create Document Component
function MyDocument({ data }) {
  const {
    personalData,
    experienceData,
    educationData,
    projectData,
    skillData,
    achievementData,
  } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heading}>
          <Text style={styles.name}>{personalData?.name || "Your Name"}</Text>
          <Text>{personalData?.role || "Description"}</Text>
          <Text>
            {personalData?.email || "Email"} | {personalData?.phone || "Phone"}{" "}
            | {personalData?.linkedin || "LinkedIn"}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>WORK EXPERIENCE</Text>
          {experienceData.map((experience, index) => (
            <View key={index}>
              <Text>
                {experience.data?.company || "Company Name"}
                <Text>
                  {experience.data?.["start-date"] || "Start Date"} -{" "}
                  {experience.data?.["end-date"] || "End Date"}{" "}
                </Text>
              </Text>
              <Text>{experience.data?.position || "Position"} </Text>
              <Text>{experience.data?.duties || "Responsibilities"} </Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text>EDUCATION</Text>
          {educationData.map((education, index) => (
            <View key={index}>
              <Text>
                {education.data?.school || "School Name"}
                <Text>{education.data?.graduation || "Graduation Year"}</Text>
              </Text>
              <Text>{education.data?.course || "Course"} </Text>
              <Text>{education.data?.degree || "Degree Class"} </Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text>PROJECTS</Text>
          {projectData.map((project, index) => (
            <View key={index}>
              <Text>
                {project.data?.name || "Project Name"}
                {project.data?.completion || "Completion Date"}
              </Text>
              <Text>{project.data?.details || "Project Details"}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text>SKILLS</Text>
          {skillData.map((skill, index) => (
            <View key={index}>
              <Text>{skill.data?.skill || "Skill"}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text>ACHIEVEMENTS</Text>
          {achievementData.map((achievement, index) => (
            <View key={index}>
              <Text>
                {achievement.data?.name || "Name"}
                {achievement.data?.date || "Date"}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
