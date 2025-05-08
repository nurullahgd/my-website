import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaLaptopCode, FaServer, FaBriefcase, FaDocker, FaGit, FaCloud, FaCodeBranch } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

// Animasyon
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const About = () => {
  const { t } = useTranslation();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  
  return (
    <Box
      as="main"
      minH="calc(100vh - 70px)"
      py={{ base: 10, md: 20 }}
      position="relative"
    >
      <Container maxW="container.lg">
        <VStack 
          spacing={{ base: 6, md: 12 }} 
          align={{ base: "center", md: "stretch" }}
        >
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            fontFamily="heading"
            bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
            bgClip="text"
            textAlign="center"
            mb={{ base: 3, md: 6 }}
          >
            {t('about.title')}
          </Heading>
          
          <Flex 
            direction={{ base: "column", lg: "row" }}
            align="center" 
            justify="space-between"
            gap={{ base: 8, lg: 16 }}
          >
            <Box 
              flex={{ lg: 3 }}
              order={{ base: 2, lg: 1 }}
              px={{ base: 2, md: 0 }}
            >
              <Text 
                fontSize={{ base: "md", md: "lg" }} 
                color="gray.300" 
                lineHeight="tall"
                textAlign={{ base: "center", lg: "left" }}
                sx={{
                  animation: `${fadeIn} 1s ease-out`,
                }}
              >
                {t('about.description')}
              </Text>
              
              <SimpleGrid 
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 4, md: 8 }}
                mt={{ base: 8, md: 12 }}
              >
                <SkillCard 
                  icon={FaGraduationCap} 
                  title="Education" 
                  description=  {t('about.education')}
                  color="blue.400"
                  delay="0.2s"
                />
                <SkillCard 
                  icon={FaLaptopCode} 
                  title="Frontend" 
                  description="React, CSS, JavaScript, TypeScript" 
                  color="purple.400"
                  delay="0.4s"
                />
                <SkillCard 
                  icon={FaServer} 
                  title="Backend" 
                  description="Golang, Express, MongoDB, PostgreSQL, MySQL" 
                  color="green.400"
                  delay="0.6s"
                />
                <SkillCard 
                  icon={FaBriefcase} 
                  title="Experience" 
                  description="Web Development, E-commerce" 
                  color="pink.400"
                  delay="0.8s"
                />
                <SkillCard 
                  icon={FaDocker} 
                  title="Docker" 
                  description="Containerization, Docker Compose" 
                  color="blue.500"
                  delay="1.0s"
                />
                <SkillCard 
                  icon={FaCloud} 
                  title="Kubernetes" 
                  description="Container Orchestration, Deployments" 
                  color="teal.400"
                  delay="1.2s"
                />
                <SkillCard 
                  icon={FaGit} 
                  title="Git" 
                  description="Version Control, GitHub, GitLab" 
                  color="orange.400"
                  delay="1.4s"
                />
                <SkillCard 
                  icon={FaCodeBranch} 
                  title="CI/CD" 
                  description="Continuous Integration/Deployment, GitHub Actions" 
                  color="red.400"
                  delay="1.6s"
                />
              </SimpleGrid>
            </Box>
            
            {isDesktop && (
              <Box 
                flex={2}
                order={{ base: 1, lg: 2 }}
                position="relative"
                h="400px"
                bg="rgb(5, 6, 27, 0.3)"
                borderRadius="lg"
                overflow="hidden"
                sx={{
                  animation: `${fadeIn} 1s ease-out 0.3s forwards`,
                  opacity: 0,
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  backgroundImage="url('https://i.hizliresim.com/a9mt131.png')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  filter="grayscale(30%) brightness(0.7) contrast(1.2)"
                  opacity={0.7}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  bgGradient="linear(to-b, transparent, rgba(5, 6, 27, 0.8))"
                />
              </Box>
            )}
          </Flex>
        </VStack>
      </Container>

      {/* Dekoratif elementler */}
      <Box
        position="absolute"
        top="5%"
        left="5%"
        width="150px"
        height="150px"
        borderRadius="50%"
        bgGradient="radial(retro.neonPurple, transparent 70%)"
        opacity="0.1"
        filter="blur(40px)"
        zIndex="-1"
      />
      
      <Box
        position="absolute"
        bottom="10%"
        right="5%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bgGradient="radial(retro.highlight, transparent 70%)"
        opacity="0.08"
        filter="blur(60px)"
        zIndex="-1"
      />
    </Box>
  );
};

// Skill kartı komponenti
const SkillCard = ({ icon, title, description, color, delay }) => {
  return (
    <Box
      p={5}
      borderRadius="lg"
      bg="rgba(5, 6, 27, 0.4)"
      borderWidth="1px"
      borderColor="rgba(123, 44, 191, 0.2)"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 10px 20px -10px rgba(188, 19, 254, 0.3)",
        borderColor: "rgba(123, 44, 191, 0.4)",
      }}
      sx={{
        animation: `${fadeIn} 0.8s ease-out ${delay} forwards`,
        opacity: 0,
      }}
    >
      <Flex direction="row" align="center" mb={3}>
        <Icon as={icon} w={6} h={6} color={color} mr={3} />
        <Text fontWeight="bold" fontSize="lg" color="white">
          {title}
        </Text>
      </Flex>
      <Text color="gray.300" fontSize="sm">
        {description}
      </Text>
    </Box>
  );
};

export default About; 