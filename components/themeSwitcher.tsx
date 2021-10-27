import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
export default function ThemeSwitcher() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Theme Toggle"
      onClick={toggleColorMode}
      colorScheme={useColorModeValue('twitter', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      borderRadius="lg"
    ></IconButton>
  );
}
