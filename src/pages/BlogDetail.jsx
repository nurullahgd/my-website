import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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

// HTML sanitization için basit bir fonksiyon
const sanitizeHTML = (html) => {
  if (!html) return '';
  
  // Tehlikeli script taglarını kaldır
  const cleanHTML = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '');
    
  return cleanHTML;
};

const apiBaseUrl = "https://api.nurullahgundogdu.com";

const BlogDetail = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/blogs/${slug}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog:', error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="60vh">
        <Spinner size="xl" color="retro.neonPurple" />
      </Flex>
    );
  }

  if (!blog) return null;

  const rawContentHTML = i18n.language === "tr"
    ? blog.content_html.tr_content_html
    : blog.content_html.en_content_html;
    
  const contentHTML = sanitizeHTML(rawContentHTML);

  const blogTitle = i18n.language === "tr" 
    ? blog.title.tr_title 
    : blog.title.en_title;

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
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
          className="blog-content"
          color="gray.200"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.8"
          dangerouslySetInnerHTML={{ __html: contentHTML }}
          sx={{
            // WYSIWYG Editor içeriği için özel stiller
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              color: 'gray.100',
              fontWeight: 'bold',
              mb: 4,
              mt: 6,
              '&:first-of-type': {
                mt: 0
              }
            },
            '& h1': {
              fontSize: '2xl',
              borderBottom: '2px solid',
              borderColor: 'retro.neonPurple',
              pb: 2
            },
            '& h2': {
              fontSize: 'xl',
              color: 'retro.neonPink'
            },
            '& h3': {
              fontSize: 'lg',
              color: 'retro.highlight'
            },
            '& p': {
              mb: 4,
              textAlign: 'justify'
            },
            '& ul, & ol': {
              mb: 4,
              pl: 6
            },
            '& li': {
              mb: 2
            },
            '& blockquote': {
              borderLeft: '4px solid',
              borderColor: 'retro.neonPurple',
              pl: 4,
              py: 2,
              bg: 'rgba(123, 44, 191, 0.1)',
              borderRadius: 'md',
              fontStyle: 'italic',
              mb: 4
            },
            '& code': {
              bg: 'rgba(5, 6, 27, 0.8)',
              color: 'retro.highlight',
              px: 2,
              py: 1,
              borderRadius: 'sm',
              fontSize: 'sm',
              fontFamily: 'mono'
            },
            '& pre': {
              bg: 'rgba(5, 6, 27, 0.9)',
              color: 'retro.highlight',
              p: 4,
              borderRadius: 'lg',
              overflow: 'auto',
              mb: 4,
              border: '1px solid',
              borderColor: 'rgba(123, 44, 191, 0.3)'
            },
            '& img': {
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 'lg',
              mb: 4,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            },
            '& a': {
              color: 'retro.highlight',
              textDecoration: 'underline',
              _hover: {
                color: 'retro.neonPink',
                textDecoration: 'none'
              }
            },
            '& strong, & b': {
              color: 'gray.100',
              fontWeight: 'bold'
            },
            '& em, & i': {
              fontStyle: 'italic',
              color: 'retro.neonPurple'
            },
            '& table': {
              width: '100%',
              borderCollapse: 'collapse',
              mb: 4,
              border: '1px solid',
              borderColor: 'rgba(123, 44, 191, 0.3)',
              borderRadius: 'lg',
              overflow: 'hidden'
            },
            '& th, & td': {
              border: '1px solid',
              borderColor: 'rgba(123, 44, 191, 0.3)',
              p: 3,
              textAlign: 'left'
            },
            '& th': {
              bg: 'rgba(123, 44, 191, 0.2)',
              color: 'retro.neonPink',
              fontWeight: 'bold'
            },
            '& hr': {
              border: 'none',
              borderTop: '2px solid',
              borderColor: 'rgba(123, 44, 191, 0.5)',
              my: 6
            }
          }}
        />
        </Container>
      </Box>
    </>
  );
};

export default BlogDetail;
