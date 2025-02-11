import { Box, Grid, Image, Text, Button, Heading, VStack, Flex, OrderedList, UnorderedList, ListItem } from "@chakra-ui/react";
import DVC from "../../../assets/images/DVC Admin.jpeg";
import VC from "../../../assets/images/VC.jpeg";
import Gladson from "../../../assets/images/Gladson.jpeg";

const ManagementBoard = () => {
  return (
    <Box bg="slate" color="blue.700" py={10} px={6}>
      {/* Section Heading */}
      <Heading size="lg" textAlign="center" mb={8}>Management Board</Heading>

      {/* Management Board */}
      <Grid templateColumns={{ base: "1fr", md: " 1fr" }} gap={6}>

        {/* Member 2 */}
        <Flex bg="blue.700" p={4} borderRadius="md" boxShadow="lg" align="center" flexDirection={{ base: "column", md: "row" }} gap={5}>
          <Image
            src={VC}
            alt="Professor Nlerum S. Okogbule"
            borderRadius="md"
            boxSize="370px"
            objectFit="cover"
          />
          <Box color={"white"} ml={4}>
            <Text fontSize="lg" fontWeight="bold">Professor Nlerum S. Okogbule</Text>
            <Text fontSize="sm">LLB (Hons) Ife, B.L (Lagos), LLM. (Ife), PhD (Glagow)</Text>
            <Text fontSize="sm">Vice-Chancellor</Text>
            <Text fontSize="sm" marginY={3}>Profrofessor Nlerum Sunday Okogbule was Born on 15th September, 1960, to the family of Late Elder Sunday and Mrs Azonwo Okogbule at Ovelle-Nvakohia, Rumuekpe in Emohua Local Government Area of Rivers State, Prof Nlerum Sunday Okogbule demonstrated his love for education at a very early stage in life.
            </Text>
            <Text fontSize="sm" marginY={3}>He started his primary education in 1965 when his hand could hardly cross the other side of his head which was the customary measurement index in those days.
            .</Text>
            <Text fontSize="sm" marginY={3}>It took the insistence and passionate plea of his father who had himself been denied the opportunity of going to school for the Headmaster to accept the young Okogbule as a pupil then</Text>
          </Box>         
        </Flex>
         {/* Profile of VC */}
         <Box>
          <VStack spacing={4} align="start" color="white" p={4} bg="blue.700" borderRadius="md" boxShadow="lg">
            <Text fontSize="lg" fontWeight="bold">Profile of Vice Chancellor</Text>
            <Text fontSize="sm" >Upon completion of his primary education in 1971, he proceeded to Government Secondary School, Creek Road, Port Harcourt in 1972. His first West African School Certificate Examination result was seized alongside others in 1976 but he re-took the WASC Examination in 1977 from home and was still able to pass the examination in Division One. For an educationally backward community then, this was a no mean achievement; and young Okogbule became an instant idol and reference point in the community.
            </Text>
            <Text fontSize="sm">The seizure of his 1976 result aborted his initial plan of studying Medicine as he could only obtain a Pass Grade in Mathematics and Physics in the 1977 result. By the time the 1976 result was released, he had credit passes in Mathematics and Physics among others, however, he was already at the School of Basic Studies, University of Port Harcourt in 1979.
            .</Text>
            <Text fontSize="sm">He successfully completed this Programme in 1980 with a CGPA of 4.80 and was already registered for the Bachelor’s degree in Economics when he passed the JAMB examination and was admitted to study Law at the then University of Ife in 1980.
            While at the University of Ife, his academic attainment enabled him to be awarded four Scholarships as follows:
            </Text>
            <OrderedList fontSize="sm">
              <ListItem>He was a National Merit Award Winner for Undergraduate Students between 1981-1984</ListItem>
              <ListItem>University of Ife Scholar, 1981-1984</ListItem>
              <ListItem> Rivers State Scholarship, 1980-1984</ListItem>
              <ListItem>Member, Dean’s Brigade for Excellent Academic Performance, 1983-1984</ListItem>
            </OrderedList>
            <Text fontSize="sm">He concluded the Bachelor of Laws (LL.B) degree programme in Second Class Honours Upper Division in 1984. He proceeded to the Nigerian Law School, Lagos and concluded the Barrister at Law programme also with Second Class Honours Upper Division. He was accordingly called to the Nigerian Bar on 20th August, 1985. Upon completion of his National Youth Service at the University of Ilorin, he commenced his Master of Laws degree programme at the University of Ife in 1986 and was the Best LL.M Student of the University in 1987. After several years of working at the Rivers State University of Science and Technology, Port Harcourt, he was compelled by a combination of desire and circumstances to travel to the University of Glasgow, Scotland for his Doctor of Philosophy (PhD) degree in Law which he obtained in March, 2012. He was University of Glasgow Scholar throughout the period of his doctoral studies in Scotland.
            </Text>

            <Text fontSize="sm">Teaching Engagement
            </Text>
            <Text fontSize="sm">Prof Okogbule was employed as a Lecturer 11 in this University in October, 1988 and rose through the ranks to become Professor in October, 2012. He was promoted Lecturer 1 in 1993, Senior Lecturer in 2001 and Reader in October, 2005. Finally he was promoted to the rank of Professor of International Law in October, 2012.</Text>
            <Text fontSize="sm">Academic Positions Held in the University</Text>
            <Text fontSize="sm">Prof Okogbule served as Faculty Examinations Officer, between 1989 and 1993. He also held the following positions in the Faculty and University:</Text>
            <UnorderedList fontSize="sm">
              <ListItem>Co-ordinator, Law Evening Programme, 1993-1995</ListItem>
              <ListItem>Prof Okogbule is the only staff of the Faculty who had at various times headed all the four Departments in the Faculty.</ListItem>
              <ListItem>Ag Head, Dept of Commercial, Private and Property Law, 1995-1997</ListItem>
              <ListItem>Ag Head, Dept of Jurisprudence, PubListItemc and International Law, 1997-2001</ListItem>
              <ListItem>Ag Dean, Faculty of Law, Oct 2001 – 2003</ListItem>
              <ListItem>Ag Head, Dept of Jurisprudence and International Law, 2004 – 2007, and 2012-2014.</ListItem>
              <ListItem>Dean, Faculty of Law, April, 2014 – January, 2018</ListItem>
              <ListItem>Dean, Postgraduate School, March, 2018 – 4th March, 2020</ListItem>
              <ListItem>Vice Chancellor – 5th March, 2020 - Present</ListItem>
            </UnorderedList>

            <Box fontSize="sm">
            <Text>Prof Okogbule has also served as Chairman of several University Committees such as: Faculty Board of Law
            Students’ Disciplinary Advisory Committee,</Text>
            <Text>Ad-Hoc Committee on Category 7 Cases</Text>
            <Text>Chairman, Committee on Review of Conditions of Service and Promotion of Non-Academic Staff of the University.</Text>

            <Text>He has also served as a Member of several Committees in the University. These include:</Text>
            <Text>Senate Business Committee</Text>
            <Text>University Accommodation Allocation Committee</Text>
            <Text>Students Disturbances Panel</Text>
            <Text>Admissions Committee, etc.</Text>

            <Text>Prof Okogbule served as a Member of the 12th Governing Council of this University representing Senate.</Text>

            <Text>Government and Community positions held</Text>
            <Text>Prof Okogbule has also served Rivers State and Nigeria in several capacities.</Text></Box>     
          
            <UnorderedList fontSize="sm">
        <ListItem>Member, Council of Legal Education, 2001-2003, and 2014 – present</ListItem>
        <ListItem>Executive Committee Member, Nigerian Association of Law Teachers, 2001 -2003, and 2014 – present</ListItem>
        <ListItem>Executive Committee Member, Nigerian Society of International Law, 1997 – present</ListItem>
        <ListItem>Chairman, Board of Directors, Institute of Human Rights and Humanitarian Law</ListItem>
        <ListItem>President, Ekpe Star Club, Rumuekpe</ListItem>
        <ListItem>Chairman, Constitution Drafting Committee, Rumuekpe Community</ListItem>
        <ListItem>Chairman, Rumuekpe Compensation Claims Committee</ListItem>
        <ListItem>Member, Peace and Security Committee, Emohua Local Government Council</ListItem>
        <ListItem>Member, Vision 2010 Committee, Emohua Local Government Council</ListItem>
        <ListItem>Member, Rivers State Golden Jubilee Celebration Committee</ListItem>
        <ListItem>Member, Committee on Accreditation and Approval of Private Schools in Rivers State, May – September, 2019</ListItem>
        <ListItem>Inaugural Human Rights Advisor, Shell Petroleum Development Company Nigeria Ltd, during his Sabbatical period in the company. 2007 – Sept, 2008</ListItem>
      </UnorderedList>
          </VStack>
         </Box>

        {/* Member 2 */}
        <Flex bg="blue.700" p={4} borderRadius="md" boxShadow="lg" align="center" flexDirection={{ base: "column", md: "row" }} gap={5}>
          <Image
            src={DVC}
            alt="Professor Victor Abaecheta Akujuru"
            borderRadius="md"
            boxSize="400px"
            objectFit="cover"
          />
          <Box color={"white"} ml={4}>
            <Text fontSize="lg" fontWeight="bold">Professor Victor Abaecheta Akujuru</Text>
            <Text fontSize="sm">B.sc (Bristol), Msc (Reading), PhD (Salford), FNIVS, RSV, MRICS, RWA, KSC, PPAFRES</Text>
            <Text fontSize="sm">DVC ADMIN</Text>
            <Text fontSize="sm" marginY={3}>Profrofessor Nlerum Sunday Okogbule was Born on 15th September, 1960, to the family of Late Elder Sunday and Mrs Azonwo Okogbule at Ovelle-Nvakohia, Rumuekpe in Emohua Local Government Area of Rivers State, Prof Nlerum Sunday Okogbule demonstrated his love for education at a very early stage in life.
            </Text>
            <Text fontSize="sm" marginY={3}>He started his primary education in 1965 when his hand could hardly cross the other side of his head which was the customary measurement index in those days.
            .</Text>
            <Text fontSize="sm" marginY={3}>It took the insistence and passionate plea of his father who had himself been denied the opportunity of going to school for the Headmaster to accept the young Okogbule as a pupil then</Text>
          </Box>
        </Flex>

        {/* Member 3 */}
        <Flex bg="blue.700" p={4} borderRadius="md" boxShadow="lg" align="center" flexDirection={{ base: "column", md: "row" }} gap={5}>
          <Image
            src={Gladson}
            alt="Professor N. Gladson Nwokah "
            borderRadius="md"
            boxSize="500px"
            objectFit="cover"
          />
          <Box color={"white"} ml={4}>
            <Text fontSize="lg" fontWeight="bold">Professor N. Gladson Nwokah </Text>
            <Text fontSize="sm" fontWeight="semibold">B.sc, MBA, Msc, PhD </Text>
            <Text fontSize="sm" fontWeight="semibold">Director RSUBS</Text>
            <Text fontSize="sm" marginY={3}>Professor N. Gladson Nwokah is a distinguished academic specializing in strategic and Internet marketing, affiliated with the Department of Marketing within the Faculty of Administration and Management at Rivers State University. Born in the early 1970s, he began his educational journey in 1979, culminating in his graduation with honours in 1985. Subsequently, he successfully completed his SSCE in 1992 as part of his secondary education.
            </Text>
            <Text fontSize="sm" marginY={3}>
            In 1992, Professor Nwokah embarked on his tertiary education at Rivers State University of Science and Technology, earning his degree in 1998. He then joined the National Youth Service as a lecturer at the former Ondo State Polytechnic Owo. Following this, he pursued an MBA program at Rivers State University of Science and Technology, followed by a swift completion of a PhD. program.
            </Text>

            <Text fontSize="sm" marginY={3}>
            Continuing his academic pursuits, Professor Nwokah obtained a postdoctoral MSc degree at Oxford Brooks University Business School, UK, where he excelled in his research and graduated with distinction. Joining the faculty of management sciences, Rivers State University, in 2003 as an Assistant Lecturer, he steadily rose to the esteemed rank of Professor. Over the years, he has held various important roles within the university, including Acting Head of the Marketing Department and Dean of the Faculty of Management Sciences. Additionally, he has served as a member of the 12th and 13th Governing Council of Rivers State University.
            </Text>
            <Text fontSize="sm" marginY={3}>Professor Nwokah is renowned for his significant publication record, being recognized for the highest impact publication at Rivers State University by the World Scientific Index in 2022. In 2009, he received accolades from the Assessment and Promotion Committee of Rivers State University for his high-quality paper publications. Currently, he serves as the Director of the Rivers State University Business School and is a Fellow of the Nigeria Institute of Marketing. Moreover, he is the esteemed founder of the Association of Marketing Academic Professionals in Nigeria.</Text>
            <Text fontSize="sm" marginY={3}>
              On October 10, 2018, Professor N. Gladson Nwokah presented the Rivers State University 59th inaugural lecture titled "From Bricks and Mortar to Click and Mortar Marketing Strategies."  Notably, this occurred just nine days after his promotion to the penultimate rank.
            </Text>


          </Box>
        </Flex>

      </Grid>
    </Box>
  );
};

export default ManagementBoard;
