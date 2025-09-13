import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const apiBaseUrl = "https://api.nurullahgundogdu.com";

const BlogDetail = () => {
  const { id, slug } = useParams();
  const { i18n } = useTranslation();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/blogs/${id}/${slug}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog:', error);
        setLoading(false);
      });
  }, [id,slug]);

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="60vh">
        <Spinner size="xl" color="retro.neonPurple" />
      </Flex>
    );
  }

  if (!blog) return null;

  const contentHTML = i18n.language === "tr"
    ? blog.content_html.tr_content_html
    : blog.content_html.en_content_html;

  const blogTitle = i18n.language === "tr" 
    ? blog.title.tr_title 
    : blog.title.en_title;

  return (
    <Box as="main" minH="calc(100vh - 70px)" py={{ base: 10, md: 20 }}>
      <Container maxW="container.md">
        <Image
          src={blog.main_image}
          alt={blogTitle}
          borderRadius="lg"
          mb={6}
          w="100%"
          maxH="350px"
          objectFit="cover"
        />
        <Flex justify="space-between" align="center" mb={4}>
          <Heading as="h1" size="xl">
            {blogTitle}
          </Heading>
          <Text fontSize="sm" color="gray.400">
            {new Date(blog.created_at).toLocaleDateString(i18n.language === "tr" ? "tr-TR" : "en-US")}
          </Text>
        </Flex>
        <Box
          color="gray.200"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
          dangerouslySetInnerHTML={{ __html: contentHTML }}
        />
      </Container>
    </Box>
  );
};

export default BlogDetail;
