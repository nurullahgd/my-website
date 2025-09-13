import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack,
  SimpleGrid,
  Flex,
  Image,
  Spinner,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const apiBaseUrl = "https://api.nurullahgundogdu.com"; // Adjust this to your API base URL

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/blogs/`)
      .then(res => res.json())
      .then(data => {
        // Sadece görünür olan blogları filtrele
        const visibleBlogs = data.filter(blog => blog.visibility === true);
        setBlogs(visibleBlogs);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="60vh">
        <Spinner size="xl" color="retro.neonPurple" />
      </Flex>
    );
  }

  return (
    <Box as="main" minH="calc(100vh - 70px)" py={{ base: 10, md: 20 }} position="relative">
      <Container maxW="container.lg">
        <VStack spacing={{ base: 6, md: 12 }} align="stretch">
          <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 12 }}>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              fontFamily="heading"
              bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
              bgClip="text"
            >
              {t('blog.title')}
            </Heading>
          </VStack>
          {blogs.length === 0 ? (
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" color="gray.400">
                {t('blog.comingSoon')}
              </Text>
            </Box>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {blogs.map((blog) => (
              <ChakraLink
                as={Link}
                to={`/blog/${blog.slug}`}
                _hover={{ textDecoration: "none" }}
                key={blog.id}
              >
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
                  h="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Image
                    src={blog.main_image}
                    alt={i18n.language === "tr" ? blog.title.tr_title : blog.title.en_title}
                    objectFit="cover"
                    w="100%"
                    h="180px"
                  />
                  <Box p={5} flex="1">
                    <Flex justify="space-between" align="center" mb={2}>
                      <Heading as="h2" size="md" noOfLines={1}>
                        {i18n.language === "tr" ? blog.title.tr_title : blog.title.en_title}
                      </Heading>
                      <Text fontSize="sm" color="gray.400">
                        {new Date(blog.created_at).toLocaleDateString(i18n.language === "tr" ? "tr-TR" : "en-US")}
                      </Text>
                    </Flex>
                    <Text fontSize="sm" color="gray.300" noOfLines={3}>
                      {i18n.language === "tr"
                        ? blog.summary.tr_summary
                        : blog.summary.en_summary}
                    </Text>
                  </Box>
                </Box>
              </ChakraLink>
              ))}
            </SimpleGrid>
          )}
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

export default Blog;