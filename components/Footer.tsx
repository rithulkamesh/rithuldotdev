import { Avatar, Box, Container, Link, Stack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => (
  <Box align="center" fontSize="sm">
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      spacing={4}
      justify={'center'}
      align={'center'}
    >
      <Stack direction={'row'} spacing={6}>
        <Link href={'//blog.rithul.dev'} target="_blank">
          Blog
        </Link>
        <Link href={'//github.com/rithulkamesh/website'} target="_blank">
          Source Code
        </Link>
      </Stack>
    </Container>
    &copy; {new Date().getFullYear()} Rithul Kamesh. All Rights Reserved.
    <br />
    Made with ❤️ using{' '}
    <Link href="//nextjs.org" target="_blank">
      <Avatar size="xs" src="//cdn.worldvectorlogo.com/logos/next-js.svg" />
    </Link>{' '}
    and{' '}
    <Link href="//chakra-ui.com/" target="_blank">
      <Avatar
        size="xs"
        src="//avatars.githubusercontent.com/u/54212428?s=280&v=4"
      />
    </Link>
  </Box>
);

export default Footer;
