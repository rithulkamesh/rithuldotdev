import { Avatar, Box, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
      &copy; {new Date().getFullYear()} Rithul Kamesh. All Rights Reserved.
      <br />
      Made with ❤️ using{' '}
      <Link href="https://nextjs.org" target="_blank">
        <Avatar
          size="xs"
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
        />
      </Link>{' '}
      and{' '}
      <Link href="https://chakra-ui.com/" target="_blank">
        <Avatar
          size="xs"
          src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
        />
      </Link>
    </Box>
  );
};

export default Footer;
