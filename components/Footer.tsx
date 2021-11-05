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
        <Link href={'https://blog.rithulk.me'} target="_blank">
          Blog
        </Link>
        <Link href={'https://github.com/rithulkamesh/website'} target="_blank">
          Source Code
        </Link>
      </Stack>
    </Container>
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

export default Footer;
