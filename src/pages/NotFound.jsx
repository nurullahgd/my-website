import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBlog, FaUser, FaRocket } from 'react-icons/fa';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Box as="main" minH="calc(100vh - 70px)" py={{ base: 10, md: 20 }} position="relative">
      <Container maxW="container.lg">
        <VStack spacing={{ base: 8, md: 12 }} textAlign="center">
          {/* 404 Görsel/İkon */}
          <VStack spacing={6}>
            <Box
              fontSize={{ base: "6xl", md: "8xl" }}
              fontFamily="heading"
              bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
              bgClip="text"
              filter="drop-shadow(0 0 10px rgba(188, 19, 254, 0.5))"
            >
              404
            </Box>
            <Icon as={FaRocket} boxSize={{ base: 12, md: 16 }} color="retro.neonPurple" />
          </VStack>

          {/* Ana Başlık */}
          <VStack spacing={4}>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              fontFamily="heading"
              bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
              bgClip="text"
            >
              {t('notFound.title')}
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="retro.neonPurple"
              fontWeight="bold"
            >
              {t('notFound.oops')}
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              maxW="600px"
              lineHeight="1.6"
            >
              {t('notFound.description')}
            </Text>
          </VStack>

          {/* Navigasyon Butonları */}
          <VStack spacing={6} w="full" maxW="500px">
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.400"
              fontWeight="medium"
            >
              {t('notFound.suggestions')}
            </Text>
            
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                to="/"
                leftIcon={<Icon as={FaHome} />}
                bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
                _hover={{
                  bgGradient: "linear(to-r, retro.neonPurple, retro.neonPink)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(188, 19, 254, 0.4)"
                }}
                color="white"
                size="lg"
              >
                {t('notFound.goHome')}
              </Button>
              
              <Button
                as={Link}
                to="/blog"
                leftIcon={<Icon as={FaBlog} />}
                variant="outline"
                borderColor="retro.neonPurple"
                color="retro.neonPurple"
                _hover={{
                  bg: "rgba(123, 44, 191, 0.1)",
                  borderColor: "retro.neonPink",
                  color: "retro.neonPink",
                  transform: "translateY(-2px)"
                }}
                size="lg"
              >
                {t('notFound.exploreBlog')}
              </Button>
              
              <Button
                as={Link}
                to="/about"
                leftIcon={<Icon as={FaUser} />}
                variant="outline"
                borderColor="retro.highlight"
                color="retro.highlight"
                _hover={{
                  bg: "rgba(76, 201, 240, 0.1)",
                  borderColor: "retro.neonPink",
                  color: "retro.neonPink",
                  transform: "translateY(-2px)"
                }}
                size="lg"
              >
                {t('notFound.learnAbout')}
              </Button>
            </HStack>
          </VStack>

          {/* İlginç Bilgi */}
          <Box
            bg="rgba(123, 44, 191, 0.1)"
            borderRadius="lg"
            p={6}
            borderWidth="1px"
            borderColor="rgba(123, 44, 191, 0.3)"
            maxW="600px"
            w="full"
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.300"
              fontStyle="italic"
            >
              {t('notFound.funFact')}
            </Text>
          </Box>
        </VStack>
      </Container>

      {/* Dekoratif Elementler */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bgGradient="radial(retro.highlight, transparent 70%)"
        opacity="0.08"
        filter="blur(60px)"
        zIndex="-1"
      />
      <Box
        position="absolute"
        bottom="15%"
        left="5%"
        width="250px"
        height="250px"
        borderRadius="50%"
        bgGradient="radial(retro.neonPurple, transparent 70%)"
        opacity="0.05"
        filter="blur(70px)"
        zIndex="-1"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="300px"
        height="300px"
        borderRadius="50%"
        bgGradient="radial(retro.neonPink, transparent 70%)"
        opacity="0.03"
        filter="blur(80px)"
        zIndex="-1"
      />
    </Box>
  );
};

export default NotFound;
