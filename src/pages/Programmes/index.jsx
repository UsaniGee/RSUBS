import { Box, Heading, Text, Button, VStack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const programs = [
  { id: "pgd", title: "Post Graduate Diploma (PGD) in Business Administration", duration: "2-4 semesters", requirement: "First degree or its equivalent with a minimum of a pass grade in cognate disciplines or a second-class lower division in any other discipline. Practical work experience is an added advantage." },
  { id: "mba", title: "Master of Business Administration (MBA)", duration: "3-5 semesters", requirement: "A good first degree or its equivalent with a minimum of a second-class grade with a CGPA of 3.00 in a 5-point scale in cognate disciplines. Applicants with a lower degree but possessing PGD are eligible to apply. Practical work experience is an added advantage." },
  { id: "msc", title: "Master of Science (MSc) ", duration: "2-4 semesters", requirement: "Same as MBA but applicants are expected to possess cognate leadership experience in the private or public sector at the time of their application." },
  { id: "dba", title: "Doctor of Business Administration (DBA)", duration: "4-6 semesters", requirement: "A first degree or its equivalent with a minimum of a second-class lower division with a CGPA of 3.00 in a 5-point scale or a PGD in cognate disciplines, as well as an MBA or M.Sc. with a minimum CGPA of 3.50 in a 5-point scale. Practical work experience is an added advantage." }
];

const Programmes = () => {
  return (
    <Box p={8} maxW="900px" mx="auto">
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Programmes
      </Heading>

      {programs.map((program, index) => (
        <VStack key={program.id} spacing={3} align="start" p={5} boxShadow="md" borderRadius="lg" bg="gray.50" w="full" marginY="10">
          <Heading as="h2" size="lg">{program.title}</Heading>
          <Text fontWeight="bold">Duration: {program.duration}</Text>
          <Text>{program.requirement}</Text>
          <Link to={`/programs/${program.id}`}>
            <Button colorScheme="blue" size="sm">Learn More</Button>
          </Link>
          {index !== programs.length - 1 && <Divider />}
        </VStack>
      ))}
    </Box>
  );
};

export default Programmes;
