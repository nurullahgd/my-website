import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  chakra,
  HStack,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';


// Araç animasyonu
const driveAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
`;

// Yazı titreyiş animasyonu
const glitchAnimation = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75),
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75),
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
`;

// Dijital yağmur animasyonu
const rainAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(1000%);
    opacity: 0;
  }
`;

// Glitch text komponenti
const GlitchText = chakra(Text, {
  baseStyle: {
    position: 'relative',
    animation: `${glitchAnimation} 2.5s infinite`,
    fontSize: { base: '1rem', md: '1.2rem' },
    fontWeight: 'bold', 
    my: 2,
    color: 'retro.accent',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '2px 2px 10px rgba(151, 64, 238, 0.5)',
    _before: {
      content: 'attr(data-text)',
      position: 'absolute',
      left: '0.05em',
      textShadow: '-2px 0 #ff00c1',
      top: 0,
      color: 'white',
      overflow: 'hidden',
      clip: 'rect(0, 900px, 0, 0)',
      animation: '1.3s ease infinite alternate-reverse',
    },
    _after: {
      content: 'attr(data-text)',
      position: 'absolute',
      left: '-0.05em',
      textShadow: '2px 0 #00fff9',
      top: 0,
      color: 'white', 
      overflow: 'hidden',
      clip: 'rect(0, 900px, 0, 0)',
      animation: '1.5s ease infinite alternate-reverse',
    }
  }
});

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Nurullah Gündoğdu - Backend Developer | Golang, Microservices, Kubernetes</title>
        <meta name="description" content="Nurullah Gündoğdu - Backend Developer specializing in Golang, microservices architecture, Docker, Kubernetes, and scalable backend systems. Building high-performance solutions with modern cloud technologies." />
        <meta name="keywords" content="Nurullah Gündoğdu, Backend Developer, Golang Developer, Software Developer, Microservices, Kubernetes, Docker, PostgreSQL, MongoDB, Redis, Backend Specialist, Turkey, Türkiye" />
        <meta name="author" content="Nurullah Gündoğdu" />
        <meta property="og:title" content="Nurullah Gündoğdu - Backend Developer" />
        <meta property="og:description" content="Backend Developer specializing in Golang, microservices architecture, Docker, Kubernetes, and scalable backend systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nurullahgundogdu.com" />
        <meta property="og:site_name" content="Nurullah Gündoğdu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nurullah Gündoğdu - Backend Developer" />
        <meta name="twitter:description" content="Backend Developer specializing in Golang, microservices architecture, Docker, Kubernetes, and scalable backend systems." />
        <link rel="canonical" href="https://nurullahgundogdu.com" />
      </Helmet>
      <Box
        as="main"
        minH="calc(100vh - 70px)"
        py={{ base: 10, md: 20 }}
        position="relative"
        overflow="hidden"
      >
      {/* Ana içerik */}
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 10, lg: 16 }}
        >
          {/* Sol taraf: Metin */}
          <VStack 
            spacing={{ base: 4, md: 5 }}
            textAlign={{ base: 'center', lg: 'left' }}
            align={{ base: 'center', lg: 'flex-start' }}
            flex={1}
            w="100%"
          >
            <GlitchText data-text={t('home.softwareDeveloper')}>{t('home.softwareDeveloper')}</GlitchText>
            
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              fontFamily="heading"
              bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
              bgClip="text"
              letterSpacing="wider"
              lineHeight="1.2"
              mb={{ base: 2, md: 4 }}
            >
              {t('home.title')}
            </Heading>
            
            <Text 
              fontSize={{ base: "md", md: "xl" }}
              color="gray.300" 
              maxW="600px" 
              lineHeight="tall"
              mb={{ base: 4, md: 6 }}
              textShadow="0 0 10px rgba(0,0,0,0.5)"
              px={{ base: 2, md: 0 }}
            >
              {t('home.description')}
            </Text>
            
            
            <HStack 
              spacing={4} 
              mt={{ base: 4, md: 6 }}
              direction={{ base: "column", sm: "row" }}
              justify={{ base: "center", lg: "flex-start" }}
            >
              <Button
                variant="neon"
                size={{ base: "md", md: "lg" }}
                px={8}
                borderRadius="full"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 15px #BC13FE',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                as={RouterLink}
                to="/about"
              >
                {t('home.aboutButton')}
              </Button>
              <Button
                variant="outline"
                size={{ base: "md", md: "lg" }}
                px={8}
                borderRadius="full"
                borderColor="retro.neonPurple"
                color="retro.accent"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 15px #BC13FE',
                  bg: 'rgba(188, 19, 254, 0.1)',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                onClick={() => window.open('/resume.html', '_blank')}
              >
                {t('home.cvButton')}
              </Button>
            </HStack>
          </VStack>
          
          {/* Sağ taraf: Dijital efekt */}
          <Box
            w={{ base: "full", lg: "380px" }}
            h={{ base: "250px", md: "300px", lg: "400px" }}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            bg="rgb(5, 6, 27, 0.4)"
            border="1px solid rgba(123, 44, 191, 0.3)"
            boxShadow="0 0 30px rgba(188, 19, 254, 0.15)"
            backdropFilter="blur(12px)"
          >
            {/* Dijital yağmur efekti */}
            {Array.from({ length: 10 }).map((_, i) => (
              <Text
                key={i}
                position="absolute"
                fontSize="sm"
                fontFamily="monospace"
                color="retro.highlight"
                opacity={0.7}
                left={`${Math.random() * 100}%`}
                top={0}
                animation={`${rainAnimation} ${3 + Math.random() * 5}s linear ${Math.random() * 2}s infinite`}
                sx={{ userSelect: 'none' }}
              >
                {Array.from({ length: 10 }).map(() => 
                  String.fromCharCode(65 + Math.floor(Math.random() * 26))
                ).join('')}
              </Text>
            ))}
            
            {/* Kod içeriği */}
            <Box
              p={{ base: 4, md: 6 }}
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
              zIndex={1}
            >
              <Box
                w={{ base: "80px", md: "120px" }}
                h={{ base: "80px", md: "120px" }}
                borderRadius="full"
                bg="rgba(123, 44, 191, 0.2)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="0 0 30px rgba(188, 19, 254, 0.3)"
                mb={{ base: 4, md: 6 }}
              >
                <FaCode size={{ base: 30, md: 50 }} color="#E0AAFF" />
              </Box>
              
              <Heading size={{ base: "sm", md: "md" }} color="white" mb={3} textAlign="center">
                {t('home.techTitle')}
              </Heading>
              
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.300" textAlign="center">
                {t('home.techDescription')}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Retro Araç Animasyonu */}
      <Box
        position="absolute"
        bottom={{ base: "3%", md: "5%" }}
        left="0"
        animation={`${driveAnimation} 15s linear infinite`}
        zIndex={1}
        transform={{ base: "scale(0.8)", md: "scale(1)" }}
        display={{ base: "none", md: "block" }}
      >
        <svg width="120" height="60" viewBox="0 0 120 60">
          <rect x="20" y="20" width="80" height="30" fill="#a64dff" rx="5" />
          <rect x="70" y="15" width="20" height="15" fill="#d9b3ff" rx="2" />
          <circle cx="35" cy="50" r="10" fill="#333" />
          <circle cx="85" cy="50" r="10" fill="#333" />
          <circle cx="35" cy="50" r="5" fill="#666" />
          <circle cx="85" cy="50" r="5" fill="#666" />
          <rect x="15" y="30" width="5" height="10" fill="#ffd700" />
          <rect x="95" y="45" width="10" height="2" fill="#ff00ff" />
        </svg>
      </Box>
    </Box>
    </>
  );
};

export default Home;