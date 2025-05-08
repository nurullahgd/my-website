import React from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  Heading,
  HStack,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';
import { keyframes } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

// Neon pırıltı efekti animasyonu
const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 5px #BC13FE,
      0 0 11px #BC13FE,
      0 0 20px #BC13FE;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
`;

// Alt çizgi animasyonu
const lineGlow = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
`;

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="nav"
      bg="rgba(5, 6, 27, 0.85)"
      backdropFilter="blur(8px)"
      borderBottom="1px solid"
      borderColor="rgba(188, 19, 254, 0.3)"
      px={4}
      py={3}
      position="sticky"
      top={0}
      zIndex={100}
      boxShadow="0 5px 20px -8px rgba(188, 19, 254, 0.7)"
    >
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
        {/* MOBILE MENU BUTTON - Sadece mobilde görünür */}
        {isMobile && (
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            color="retro.accent"
            _hover={{
              bg: 'rgba(123, 44, 191, 0.2)',
            }}
          />
        )}

        {/* DESKTOP MENU - Sadece desktopda görünür */}
        {!isMobile && (
          <Flex gap={8} ml={-4}>
            <NavLink to="/" label={t('nav.home')} />
            <NavLink to="/blog" label={t('nav.blog')} />
            <NavLink to="/about" label={t('nav.about')} />
          </Flex>
        )}

        {/* Orta Başlık */}
        <Heading
          as="h1"
          size={{ base: "md", md: "lg" }}
          fontFamily="heading"
          bgGradient="linear(to-r, retro.neonPink, retro.neonPurple)"
          bgClip="text"
          letterSpacing="wider"
          textShadow="0 0 5px #BC13FE"
          animation={`${neonFlicker} 5s infinite alternate`}
        >
          Nurullah Gündoğdu
        </Heading>

        {/* Sağ Sosyal Medya ve Dil Seçimi */}
        <HStack spacing={3}>
          {!isMobile && (
            <>
              <SocialIcon 
                href="https://github.com/nurullahgd" 
                icon={<FaGithub size={18} />} 
                label="GitHub"
              />
              <SocialIcon 
                href="https://linkedin.com/in/nurullahgundogdu" 
                icon={<FaLinkedin size={18} />} 
                label="LinkedIn"
              />
              <SocialIcon 
                href="https://instagram.com/nurullahgnd" 
                icon={<FaInstagram size={18} />} 
                label="Instagram"
              />
            </>
          )}
          <LanguageSwitcher />
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent 
          bg="rgba(5, 6, 27, 0.95)" 
          backdropFilter="blur(10px)"
          borderRight="1px solid rgba(188, 19, 254, 0.3)"
        >
          <DrawerCloseButton color="retro.accent" />
          <DrawerHeader 
            borderBottomWidth="1px" 
            borderColor="rgba(188, 19, 254, 0.3)"
            color="white"
          >
            Menu
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={6} align="start" mt={6}>
              <MobileNavLink to="/" label={t('nav.home')} onClose={onClose} />
              <MobileNavLink to="/blog" label={t('nav.blog')} onClose={onClose} />
              <MobileNavLink to="/about" label={t('nav.about')} onClose={onClose} />
              
              <Box pt={6} pb={2} w="100%">
                <Text mb={4} color="gray.400" fontSize="sm">{t('language.select')}</Text>
                <Box pl={2}>
                  <LanguageSwitcher />
                </Box>
              </Box>
              
              <Box pt={6} w="100%">
                <Text mb={4} color="gray.400" fontSize="sm">Social</Text>
                <HStack spacing={4} pl={2}>
                  <SocialIcon 
                    href="https://github.com/nurullahgd" 
                    icon={<FaGithub size={18} />} 
                    label="GitHub"
                  />
                  <SocialIcon 
                    href="https://linkedin.com/in/nurullahgundogdu" 
                    icon={<FaLinkedin size={18} />} 
                    label="LinkedIn"
                  />
                  <SocialIcon 
                    href="https://instagram.com/nurullahgnd" 
                    icon={<FaInstagram size={18} />} 
                    label="Instagram"
                  />
                </HStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

// Özel NavLink komponenti
const NavLink = ({ to, label }) => {
  return (
    <Box position="relative">
      <ChakraLink
        as={RouterLink}
        to={to}
        fontSize="md"
        fontFamily="heading"
        color="retro.accent"
        position="relative"
        _hover={{ textDecoration: 'none', color: 'white' }}
        p={2}
        letterSpacing="1px"
      >
        {label}
        <Box
          position="absolute"
          bottom="-2px"
          left="0"
          height="2px"
          bg="linear-gradient(to right, retro.neonPink, retro.neonPurple)"
          width="0"
          opacity="0"
          _groupHover={{ 
            animation: `${lineGlow} 0.3s forwards` 
          }}
        />
      </ChakraLink>
    </Box>
  );
};

// Mobil NavLink komponenti
const MobileNavLink = ({ to, label, onClose }) => {
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      onClick={onClose}
      fontSize="xl"
      fontFamily="heading"
      color="retro.accent"
      _hover={{ 
        color: 'white',
        textDecoration: 'none',
        textShadow: '0 0 10px rgba(224, 170, 255, 0.8)'
      }}
      py={2}
      px={2}
      w="100%"
      display="block"
      letterSpacing="1px"
    >
      {label}
    </ChakraLink>
  );
};

// Özel SocialIcon komponenti
const SocialIcon = ({ href, icon, label }) => {
  return (
    <ChakraLink
      href={href}
      isExternal
      position="relative"
      role="group"
      aria-label={label}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="32px"
      h="32px"
      borderRadius="full"
      transition="all 0.3s ease"
      bg="rgba(123, 44, 191, 0.2)"
      _hover={{
        bg: "rgba(123, 44, 191, 0.5)",
        transform: "translateY(-3px)",
        boxShadow: "0 0 15px rgba(188, 19, 254, 0.6)"
      }}
    >
      <Box 
        color="#a64dff" 
        transition="all 0.3s"
        _groupHover={{ 
          color: "white",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" 
        }}
      >
        {icon}
      </Box>
    </ChakraLink>
  );
};

export default Navbar;
