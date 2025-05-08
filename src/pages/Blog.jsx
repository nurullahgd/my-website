import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack,
  SimpleGrid,
  Button,
  Flex,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@emotion/react';

// Animasyon
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(188, 19, 254, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(188, 19, 254, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(188, 19, 254, 0);
  }
`;

const Blog = () => {
  const { t } = useTranslation();
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  
  return (
    <Box
      as="main"
      minH="calc(100vh - 70px)"
      py={{ base: 10, md: 20 }}
      position="relative"
    >
      <Container maxW="container.lg">
        <VStack spacing={{ base: 6, md: 12 }} align="stretch">
          <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 12 }}>
            <Heading
              as="h1"
              size={headingSize}
              fontFamily="heading"
              bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
              bgClip="text"
            >
              {t('blog.title')}
            </Heading>
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              color="retro.accent"
              maxW="600px"
              mx="auto"
            >
              {t('blog.comingSoon')}
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {[1, 2, 3].map((item) => (
              <BlogPlaceholder key={item} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      
      {/* Dekoratif elementler */}
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
    </Box>
  );
};

// Blog makale yeri tutucu
const BlogPlaceholder = () => {
  return (
    <Box
      bg="rgba(5, 6, 27, 0.4)"
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      borderColor="rgba(123, 44, 191, 0.2)"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 10px 20px -10px rgba(188, 19, 254, 0.3)",
      }}
    >
      <Box
        h={{ base: "150px", md: "200px" }}
        bg="rgba(188, 19, 254, 0.1)"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="50px"
          height="50px"
          borderRadius="full"
          bg="rgba(123, 44, 191, 0.3)"
          sx={{
            animation: `${pulseAnimation} 2s infinite`,
          }}
        />
      </Box>
      
      <Box p={5}>
        <Flex justify="space-between" align="center" mb={3}>
          <Badge colorScheme="purple" px={2} py={1} borderRadius="md">
            Coming Soon
          </Badge>
          <Text fontSize="sm" color="gray.400">
            2025
          </Text>
        </Flex>
        
        <Box 
          h="20px" 
          bg="rgba(123, 44, 191, 0.2)" 
          borderRadius="md" 
          mb={2} 
          width="80%"
        />
        <Box 
          h="20px" 
          bg="rgba(123, 44, 191, 0.1)" 
          borderRadius="md" 
          mb={4}
          width="60%" 
        />
        
        <SimpleGrid columns={2} spacing={2} mb={4}>
          <Box h="10px" bg="rgba(76, 201, 240, 0.1)" borderRadius="md" />
          <Box h="10px" bg="rgba(76, 201, 240, 0.1)" borderRadius="md" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Blog; 