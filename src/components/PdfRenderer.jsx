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
    marginLeft: 20,
    marginRight: 20,
    fontSize: 12,
  },
  name: {
    fontSize: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: "blue",
    marginTop: 10,
    marginBottom: 3,
    borderBottom: "2px solid black",
  },
  subSection: {
    marginBottom: 5,
  },
  companyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boldText: {
    fontWeight: 1000,
    fontSize: 13,
    fontStyle: "bold",
  },
  companyYear: {
    fontStyle: "italic",
    color: "red",
  },
  skillList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "space-between",
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
          <Text style={styles.name}>
            {personalData?.firstName || "First Name"}{" "}
            {personalData?.lastName || "Last Name"}
          </Text>
          <Text>{personalData?.role || "Description"}</Text>
          <Text>
            {personalData?.email || "Email"} | {personalData?.phone || "Phone"}{" "}
            | {personalData?.linkedin || "LinkedIn"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>WORK EXPERIENCE</Text>
          {experienceData.map((experience, index) => (
            <View key={index} style={styles.subSection}>
              <View style={styles.companyHeader}>
                <Text style={styles.companyName}>
                  {experience.data?.company || "Company Name"}
                </Text>
                <Text>
                  {experience.data?.["startDate"] || "Start Date"} -{" "}
                  {experience.data?.["endDate"] || "End Date"}{" "}
                </Text>
              </View>
              <Text>{experience.data?.position || "Position"} </Text>
              <View>
                {experience.data?.duties ? (
                  experience.data?.duties
                    .split("\n")
                    .map((duty, index) => <Text key={index}> - {duty}</Text>)
                ) : (
                  <Text>Responsibilities</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>EDUCATION</Text>
          {educationData.map((education, index) => (
            <View key={index} style={styles.subSection}>
              <View style={styles.companyHeader}>
                <Text>{education.data?.school || "School Name"}</Text>
                <Text>{education.data?.graduation || "Graduation Year"}</Text>
              </View>
              <Text>{education.data?.course || "B.Sc. Course"} </Text>
              <View>
                {education.data?.details ? (
                  education.data?.details
                    .split("\n")
                    .map((detail, index) => (
                      <Text key={index}> - {detail}</Text>
                    ))
                ) : (
                  <Text>Details</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>PROJECTS</Text>
          {projectData.map((project, index) => (
            <View key={index} style={styles.subSection}>
              <View style={styles.companyHeader}>
                <Text>{project.data?.name || "Project Name"}</Text>
                <Text>{project.data?.completion || "Completion Date"}</Text>
              </View>
              <View>
                {project.data?.details ? (
                  project.data?.details
                    .split("\n")
                    .map((detail, index) => (
                      <Text key={index}> - {detail}</Text>
                    ))
                ) : (
                  <Text>Details</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SKILLS</Text>
          <View style={styles.skillList}>
            {skillData.map((skill, index) => (
              <View key={index}>
                <Text>{skill.data?.skill || "Skill"}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ACHIEVEMENTS</Text>
          {achievementData.map((achievement, index) => (
            <View key={index} style={(styles.companyHeader, styles.subSection)}>
              <Text>{achievement.data?.name || "Name"}</Text>
              <Text>{achievement.data?.date || "Date"}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
