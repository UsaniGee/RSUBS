import { useParams } from "react-router-dom";
import { Box, Heading, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react";

const programDetails = {
  pgd: {
    title: "Post Graduate Diploma in Business Administration (PGDBA)",
    content: "This program is designed for graduates who wish to build expertise in business management."
  },
  mba: {
    title: "Master of Business Administration (MBA)",
    content: "The MBA program provides advanced knowledge in leadership, finance, and management strategies."
  },
  msc: {
    title: "Master of Science (MSc)",
    content: "The MSc program is tailored for professionals seeking specialization in research and business analytics."
  },
  dba: {
    title: "Doctor of Business Administration (DBA)",
    content: "The DBA is a research-based program aimed at high-level executives and academics."
  }
};

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programDetails[id];

  if (!program) {
    return <Text textAlign="center">Program not found</Text>;
  }

  return (
    <Box p={8} maxW="900px" mx="auto">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">{program.title}</Heading>
        <Text>{program.content}</Text>
        <Heading as="h3" size="md">General Entry Requirements</Heading>
        <VStack>
            <Text>
                Applications for Admission are considered on the two important grounds of previous relevant academic qualifications and leadership experience of the applicant. Specific, requirements for admission into the different programmes are: 
            </Text>
            <OrderedList>
                <ListItem>
                    Post Graduate Diploma (PGD) in Business Administration: First degree or its equivalent with a minimum of a pass grade in cognate disciplines or a second-class lower division in any other discipline. Practical work experience is an added advantage.                    
                </ListItem>
                <ListItem>
                    Master of Business Administration (MBA): A good first degree or its equivalent with a minimum of a second-class grade with a CGPA of 3.00 in a 5-point scale in cognate disciplines. Applicants with a lower degree but possessing PGD are eligible to apply. Practical work experience is an added advantage.
                </ListItem>
                <ListItem>
                    Executive Master of Business Administration (EMBA): Same as MBA but applicants are expected to possess cognate leadership experience in the private or public sector at the time of their application.
                </ListItem>
                <ListItem>
                    Doctor of Business Administration: To qualify for admission into the DBA programme, applicants must possess a first degree or its equivalent with a minimum of a second-class lower division with a CGPA of 3.00 in a 5-point scale or a PGD in cognate disciplines, as well as an MBA or M.Sc. with a minimum CGPA of 3.50 in a 5-point scale. Practical work experience is an added advantage.
                </ListItem>
                <ListItem>
                    All Applicants for all programmes must also fulfill the matriculation requirements of the Rivers State University, Nkpolu-Oroworukwo, Port Harcourt, viz. five O’level credits in relevant subjects, including English and Mathematics (and Economics for courses in the Management Sciences).
                    Note: 
                    <Text>
                      (a) In addition to the conditions in nos. 1-5 above, an applicant for the DBA degree may attend a selection test and/or oral interview. Candidates for DBA shall be required to submit and defend a proposal in their area of interest.</Text>
                    <Text>
                      (b) Applicants shall be required to submit online, scanned copies of their academic credentials, and three reference letters addressed to the Director, RSUBS, one of which must be from a lecturer in the candidate’s previous institution, who will attest to the good conduct of the candidate
                    </Text>
                    <Text>
                    (c) Applicants are also required to request their previous institutions to forward the transcript of their highest qualification to the Secretary, RSUBS.
                    </Text>
                </ListItem>
                <ListItem>
                  Specialized Short Executive Courses: Applicants for the specialized short courses should be working with a desire to improve their level of competence in the specialized area.
                </ListItem>
            </OrderedList>

            <Heading as="h3" size="md">
                  Duration of the Programmes
            </Heading>
            <OrderedList>
              <ListItem>
                The Postgraduate Diploma (PGD) in Business Administration programme with project or seminar runs for a minimum of two semesters and a maximum of four semesters.                
              </ListItem>
              <ListItem>
                The Master of Business Administration (MBA)programme with dissertation runs for a minimum of three semesters and a maximum of five semesters.                
              </ListItem>
              <ListItem>
                The Executive Master of Business Administration (EMBA)programme with dissertation runs for a minimum of four semesters and a maximum of six semesters.
              </ListItem>
              <ListItem>
                Master of Science (M.Sc) – weekend programme: The M.Sc weekend programme with dissertation runs a minimum of two semesters and maximum of four semesters.
              </ListItem>
              <ListItem>
                The Doctor of Business Administration (DBA) programme with thesis runs for a minimum of four semesters and a maximum of six semesters.
              </ListItem>
              <ListItem>
                Specialized Short Courses: The Specialized Short Courses run for a period of two weeks or as may be applicable.
              </ListItem>
            </OrderedList>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ProgramDetails;
