import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Button, 
  Flex, 
  Box,
  useColorModeValue 
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;
  
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
        color="retro.accent"
        borderRadius="full"
        size="sm"
        px={3}
        py={1}
        _hover={{
          bg: 'rgba(123, 44, 191, 0.2)',
          boxShadow: '0 0 5px rgba(188, 19, 254, 0.3)'
        }}
      >
        {currentLanguage === 'tr' ? 'TR' : 'EN'}
      </MenuButton>
      <MenuList
        bg="rgba(5, 6, 27, 0.9)"
        backdropFilter="blur(8px)"
        borderColor="retro.primary"
        boxShadow="0 0 10px rgba(188, 19, 254, 0.3)"
        borderRadius="md"
      >
        <MenuItem
          onClick={() => changeLanguage('tr')}
          bg={currentLanguage === 'tr' ? 'rgba(123, 44, 191, 0.2)' : 'transparent'}
          _hover={{ bg: 'rgba(123, 44, 191, 0.3)' }}
          color="white"
        >
          {t('language.tr')}
        </MenuItem>
        <MenuItem
          onClick={() => changeLanguage('en')}
          bg={currentLanguage === 'en' ? 'rgba(123, 44, 191, 0.2)' : 'transparent'}
          _hover={{ bg: 'rgba(123, 44, 191, 0.3)' }}
          color="white"
        >
          {t('language.en')}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher; 